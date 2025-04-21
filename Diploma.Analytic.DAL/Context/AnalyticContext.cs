using Diploma.Analytic.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace Diploma.Analytic.DAL.Context;

public class AnalyticContext (DbContextOptions<AnalyticContext> options) : DbContext(options)
{
    DbSet<ReactionOnCupon> ReactionOnCupons { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
    }
}