using System.Text.Json;
using Confluent.Kafka;
using Diploma.API.DataTransferObjects;

namespace Diploma.API.Services;

public class ConsumerService : IHostedService
{
    private readonly string _groupId = "parserGroup";
    private readonly string _bootstrapServers = "kafka:29092";
    private readonly string _topic = "replyCupons";


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
            AutoOffsetReset = AutoOffsetReset.Latest
        };

        using (var consumerBuilder = new ConsumerBuilder<Ignore, string>(config).Build())
        {
            Thread.Sleep(8000);
            consumerBuilder.Subscribe(_topic);
            try
            {
                while (!cancellationToken.IsCancellationRequested)
                {
                    var consumer = consumerBuilder.Consume(cancellationToken);
                    List<CuponDto>? cuponsList = JsonSerializer.Deserialize<List<CuponDto>?>(consumer.Message.Value);
                }
            }
            catch (Exception ex)
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