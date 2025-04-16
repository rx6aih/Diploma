namespace Diploma.Auth.DAL.Implementations;

public class UserRepository(AuthContext context) : Repository<User>(context)
{
    public async Task Add(User user)
    {
        var role = await context.Roles
                       .SingleOrDefaultAsync(r=>r.Id ==(int)Enums.Role.Admin)
                   ?? throw new InvalidOperationException("User not found");

        var userEntity = new User(user.Name,user.Email, user.PasswordHash)
        {
            Id = user.Id,
            Roles = [role]
        };
        userEntity.Id = user.Id;
        userEntity.Roles = [role];
        await context.Users.AddAsync(userEntity);
        await context.SaveChangesAsync();
    }
    public async Task<User> GetByEmailAsync(string email, CancellationToken cancellationToken = default)
    {
        var user = await context
            .Users.AsNoTracking()
            .FirstOrDefaultAsync(u => u.Email == email, cancellationToken) ?? throw new Exception("User not found");
        return user;
    }

    public async Task<HashSet<Enums.Permission>> GetPermissions(int userId, CancellationToken cancellationToken = default)
    {
        var roles = await context
            .Users
            .AsNoTracking()
            .Include(u => u.Roles)
            .ThenInclude(r => r.Permissions)
            .Where(u => u.Id == userId)
            .Select(u => u.Roles)
            .ToListAsync();

        return roles
            .SelectMany(r=> r)
            .SelectMany(r => r.Permissions)
            .Select(p=>(Enums.Permission)p.Id)
            .ToHashSet();
    }

    public async Task<List<User>> GetAllUsers(CancellationToken cancellationToken = default)
    {
        return await context.Users.ToListAsync(cancellationToken);
    }
}