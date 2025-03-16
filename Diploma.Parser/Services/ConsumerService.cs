using System.Text.Json;
using Confluent.Kafka;
using Diploma.API.DataTransferObjects;
using Diploma.API.Services;
using Diploma.DAL.Entities.Implementations;
using Diploma.Parser.Configurations;
using Diploma.Parser.Controllers;
using Diploma.Parser.Implementations;
using Diploma.Parser.ParserStrategies;
using Microsoft.Extensions.Options;

namespace Diploma.Parser.Services;

public class ConsumerService(IOptions<ListCuponConfiguration> options) : IHostedService
{
    private readonly string _groupId = "parserGroup";
    private static readonly string _bootstrapServers = "kafka:29092";
    private static readonly string _topic = "requireCupons";

    private readonly BaseProducerService<string> _producerService = new(_bootstrapServers, _topic);
    
    public Task StartAsync(CancellationToken cancellationToken)
    {
        Task.Run(() => ConsumeMessageAsync(cancellationToken), cancellationToken);
        return Task.CompletedTask;
    }

    private async Task ConsumeMessageAsync(CancellationToken cancellationToken)
    {
        ConsumerConfig config = new()
        {
            GroupId = _groupId,
            BootstrapServers = _bootstrapServers,
            AutoOffsetReset = AutoOffsetReset.Latest,
        };
        
        using (var consumerBuilder = new ConsumerBuilder<Ignore, string>(config).Build())
        {
            Thread.Sleep(10000);
            consumerBuilder.Subscribe(_topic);

            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var consumer = consumerBuilder.Consume(cancellationToken);
                    var restaurantCase = JsonSerializer.Deserialize<string?>(consumer.Message.Value);
                    
                    List<CuponDto> cuponDtos = new();

                    switch (restaurantCase)
                    {
                        case "kfc":
                        {
                            Parser<KfcCupon> parser = new Parser<KfcCupon>(new KfcParserStrategy(),
                                options.Value.CuponConfiguration[0]);
                            List<KfcCupon> cupons = await parser.Parse();

                            foreach (var cupon in cupons)
                            {
                                cuponDtos.Add(new CuponDto("kfc",Description:cupon.Description,
                                    Title:cupon.Title, ImageUrl:cupon.ImageUrl, Price:cupon.Price, 
                                    Url:cupon.Url));
                            }

                            break;
                        } 
                    }
                    string cuponJson = JsonSerializer.Serialize(cuponDtos);
                    await _producerService.Produce(cuponJson);

                }
            }
            catch (OperationCanceledException)
            {
                Console.WriteLine("Consumer cancelled");
            }
            finally
            {
                consumerBuilder.Close();
            }
        }
    }
    
    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}