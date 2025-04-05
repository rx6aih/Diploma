using Diploma.Notification.Services;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddHostedService<ConsumerService>();

var app = builder.Build();

app.Run();
