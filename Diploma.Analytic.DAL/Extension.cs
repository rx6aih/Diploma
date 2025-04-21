using Diploma.Analytic.DAL.Context;
using Diploma.Utility.Repository.Implementations;
using Diploma.Utility.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Diploma.Analytic.DAL;

public static class Extension
{
    public static IServiceCollection AddDal(this IServiceCollection services)
    {
        services.AddScoped(typeof(IRepository<>), typeof(Repository<>));

        services.AddDbContext<AnalyticContext>(x =>
            x.UseNpgsql("Server=postgres;Port=5432;Database=Auth;User Id=postgres;Password=postgres"
            ));
        return services;
    }
}