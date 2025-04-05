using Confluent.Kafka;
using Diploma.Notification.Services.Interfaces;

namespace Diploma.Notification.Services;

public class ConsumerService(INotify notifier) : IHostedService
{
    private readonly string _groupId = "notificationGroup";
    private readonly string _bootstrapServers = "localhost:9092";
    private readonly string _topic = "notify";
    
    public Task StartAsync(CancellationToken cancellationToken)
    {
        Task.Run(() => ConsumeMessageAsync(cancellationToken), cancellationToken);
        return Task.CompletedTask;
    }

    private void ConsumeMessageAsync(CancellationToken cancellationToken)
    {
        ConsumerConfig config = new()
        {
            GroupId = _groupId,
            BootstrapServers = _bootstrapServers,
            AutoOffsetReset = AutoOffsetReset.Latest
        };

        using (var consumerBuilder = new ConsumerBuilder<Ignore, string>(config).Build())
        {
            Thread.Sleep(10000);
            consumerBuilder.Subscribe(_topic);
            try
            {
                while (true)
                {
                    var consumer = consumerBuilder.Consume(cancellationToken);
                    string message = consumer.Message.Value;
                    notifier.Notify(message);
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex);
            }
        }
    }
    
    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}