using Confluent.Kafka;

namespace Diploma.API.Services;

public class BaseProducerService<T>(string bootstrapServers, string topic, T data)
{
    public async Task Produce()
    {
        if(data == null)
            throw new ArgumentNullException(nameof(data) + " cant be null");
        
        await SendRequest();
    }

    private async Task SendRequest()
    {
        ProducerConfig config = new()
        {
            BootstrapServers = bootstrapServers,
            Acks = Acks.All,
        };

        try
        {
            using (var producer = new ProducerBuilder<Null, T>(config).Build())
                await producer.ProduceAsync(topic, new Message<Null, T>() { Value = data });
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }
    }
}