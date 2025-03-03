using Diploma.Parser.Configurations;

var builder = WebApplication.CreateBuilder(args);

builder.Services.Configure<CuponConfiguration>(builder.Configuration.GetSection(nameof(CuponConfiguration)));

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();
app.MapControllers();

app.UseHttpsRedirection();


app.Run();
