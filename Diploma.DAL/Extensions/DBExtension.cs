using Diploma.DAL.Context;
using Diploma.DAL.Implementations;
using Diploma.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Diploma.DAL.Extensions;

public static class DBExtension
{
    public static IServiceCollection AddDal(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddDbContext<CuponManagerContext>(x =>
            x.UseNpgsql("Server=postgres;Port=5432;Database=CuponManager;User Id=postgres;Password=postgres"
            ));
        return services;
    }
}