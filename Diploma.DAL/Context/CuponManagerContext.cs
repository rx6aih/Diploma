using Diploma.DAL.Entities.Implementations;
using Microsoft.EntityFrameworkCore;

namespace Diploma.DAL.Context;

public class CuponManagerContext(DbContextOptions<CuponManagerContext> options) : DbContext(options)
{
    public DbSet<BkCupon> BkCupons { get; set; }
    public DbSet<KfcCupon> KfcCupons { get; set; }
    public DbSet<MacCupon> MacCupons { get; set; }
}