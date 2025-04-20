using Diploma.Auth.DAL.Enums;
using Microsoft.AspNetCore.Authorization;

namespace Diploma.Auth.Authentication;

public class PermissionRequirement : IAuthorizationRequirement
{
    public PermissionRequirement(Permission[] permissions)
    {
        Permissions = permissions;
    }
    public Permission[] Permissions { get; set; } = [];
}