using System.ComponentModel.DataAnnotations;

namespace Diploma.Auth.DTO;

public record UserLoginDto([Required] string Email, [Required] string Password);
