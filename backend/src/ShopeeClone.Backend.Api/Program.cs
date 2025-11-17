using ShopeeClone.Backend.Application;
using ShopeeClone.Backend.Infrastructure;
using ShopeeClone.Backend.Infrastructure.Identity;
using ShopeeClone.Backend.Infrastructure.Settings;

var builder = WebApplication.CreateBuilder(args);
var services = builder.Services;

services.AddControllers();

services.Configure<JwtSettings>(builder.Configuration.GetSection(JwtSettings.SectionName));

services.AddApplicationServices();
services.AddInfrastructure(builder.Configuration);
services.AddJwtAuth(builder.Configuration);

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAngularDev",
        policy =>
        {
            policy
                .WithOrigins("http://localhost:4200")
                .AllowAnyHeader()
                .AllowAnyMethod()
                .AllowCredentials();
        }
    );
});

services.AddEndpointsApiExplorer();
services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAngularDev");
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var service = scope.ServiceProvider;
    await IdentitySeed.SeedRolesAsync(service);
}

app.Run();
