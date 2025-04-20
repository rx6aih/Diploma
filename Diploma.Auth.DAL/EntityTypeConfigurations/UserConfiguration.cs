
namespace Diploma.Auth.DAL.EntityTypeConfigurations;

public class UserConfiguration : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.HasKey(u => u.Id);
        builder.HasIndex(u => u.Id);
        
        builder.HasMany(u=> u.Roles)
            .WithMany(r=>r.Users)
            .UsingEntity<UserRole>(
                l=> l.HasOne<Role>().WithMany().HasForeignKey(r=>r.RoleId),
                r=> r.HasOne<User>().WithMany().HasForeignKey(u=>u.UserId));
    }
}