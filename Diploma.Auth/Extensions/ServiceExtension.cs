using Diploma.Auth.Services;
using Diploma.Auth.Utility;
using Diploma.Auth.Utility.Jwt;

namespace Diploma.Auth.Extensions;

public static class ServiceExtension
{
    public static IServiceCollection AddBusinessService(this IServiceCollection services)
    {
        services.AddScoped<UserService>();
        services.AddScoped<JwtProvider>();
        services.AddScoped<PasswordHasher>();
        return services;
    }
}