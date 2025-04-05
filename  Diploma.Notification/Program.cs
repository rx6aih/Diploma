using Diploma.Notification.Services;
using Diploma.Notification.Services.Implementations;
using Diploma.Notification.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<INotify,MailNotifier>();
builder.Services.AddHostedService<ConsumerService>();

var app = builder.Build();

app.Run();
