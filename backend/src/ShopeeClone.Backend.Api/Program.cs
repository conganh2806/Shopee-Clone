using ShopeeClone.Backend.Api;
using ShopeeClone.Backend.Application;
using ShopeeClone.Backend.Infrastructure;
using ShopeeClone.Backend.Infrastructure.Settings;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

services.Configure<JwtSettings>(builder.Configuration.GetSection(JwtSettings.SectionName));
services.AddApplication();
services.AddInfrastructure(builder.Configuration);

services.AddControllers();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAngularDev",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod();
        }
    );
});

var app = builder.Build();

app.MapControllers();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseCors();

app.Run();
