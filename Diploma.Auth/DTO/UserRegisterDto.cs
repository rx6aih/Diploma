using System.ComponentModel.DataAnnotations;

namespace Diploma.Auth.DTO;

public record UserRegisterDto([Required]string UserName, [Required]string Email, [Required]string Password);
