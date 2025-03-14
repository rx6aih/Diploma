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
        
    }
    
    public Task StopAsync(CancellationToken cancellationToken)
    {
        return Task.CompletedTask;
    }
}