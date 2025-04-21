using Diploma.DAL.Context;
using Diploma.Utility.Repository.Interfaces;
using Diploma.Utility.Repository.Implementations;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Diploma.DAL.Extensions;

public static class DbExtension
{
    public static IServiceCollection AddDal(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddDbContext<CuponManagerContext>(x =>
            x.UseNpgsql("Server=localhost;Port=5438;Database=Auth;User Id=postgres;Password=postgres"
            ));
        return services;
    }
}