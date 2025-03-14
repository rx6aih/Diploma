using Diploma.Parser.Configurations;
using Diploma.Parser.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<ListCuponConfiguration>(builder.Configuration.GetSection(nameof(ListCuponConfiguration)));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddHostedService<ConsumerService>();
var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.UseHttpsRedirection();


app.Run();
