using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Diploma.Analytic.DAL.Context;

public class AnalyticContext (DbContextOptions<AnalyticContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}