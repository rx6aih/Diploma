using Diploma.Auth.Services;
using Microsoft.AspNetCore.Authorization;

namespace Diploma.Auth.Authentication;

public class PermissionAuthorizationHandler : AuthorizationHandler<PermissionRequirement>
{
    private readonly IServiceScopeFactory _scopeFactory;
    public PermissionAuthorizationHandler(IServiceScopeFactory serviceScopeFactory)
    {
        _scopeFactory = serviceScopeFactory;
    }
    
    protected override async Task HandleRequirementAsync(
        AuthorizationHandlerContext context, 
        PermissionRequirement requirement)
    {
        var userId = context.User.Claims.FirstOrDefault(
            c=>c.Type=="userId");

        if (userId is null || !int.TryParse(userId.Value, out var id))
        {
            return;
        }
        using var scope = _scopeFactory.CreateScope();

        var userService = scope.ServiceProvider.GetRequiredService<UserService>();
        
        var permissions = await userService.GetPermissions(id);

        if (permissions.Intersect(requirement.Permissions).Any())
        {
            context.Succeed(requirement);
        }
    }
}