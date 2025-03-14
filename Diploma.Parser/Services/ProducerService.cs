using Confluent.Kafka;
using Diploma.API.DataTransferObjects;
using Diploma.DAL.Entities.Abstract;
using Diploma.DAL.Entities.Implementations;
using Diploma.Parser.Interfaces;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace Diploma.Parser.Services;

public class ProducerService
{
    private readonly string _bootstrapServers = "kafka:29092";
    private readonly string _topic = "replyCupons";

    public async Task Produce(List<CuponDto>? cupons)
    {
        if(cupons == null || cupons.Count == 0)
            throw new NullReferenceException("Cupons cannot be null or empty");
        
        await SendRequest(_topic, cupons);
    }
    
    private async Task SendRequest(string topic, List<CuponDto> message)
    {
        ProducerConfig config = new ProducerConfig()
        {
            BootstrapServers = _bootstrapServers,
            Acks = Acks.All
        };

        try
        {
            using (var producer = new ProducerBuilder<Null, List<CuponDto>>(config).Build())
                await producer.ProduceAsync(topic, new Message<Null, List<CuponDto>> { Value = message });
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex.Message);
        }
    }
}