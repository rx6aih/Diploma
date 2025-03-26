using System.Text.Json;
using Confluent.Kafka;

namespace Diploma.Utility.Kafka;

public class BaseProducerService<T>(string bootstrapServers, string topic)
{
    public async Task Produce(T data)
    {
        if(data == null)
            throw new ArgumentNullException(nameof(data) + " cant be null");
        
        await SendRequest(data);
    }

    private async Task SendRequest(T data)
    {
        ProducerConfig config = new()
        {
            BootstrapServers = bootstrapServers,
            Acks = Acks.All,
        };

        try
        {
            string jsonData = JsonSerializer.Serialize(data);
            using (var producer = new ProducerBuilder<Null, string>(config).Build())
                await producer.ProduceAsync(topic:topic, new Message<Null, string>(){ Value = jsonData});
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
        }
    }
}