namespace Diploma.API.DataTransferObjects;

public record CuponDto(string Type ,string? Title, string? ImageUrl, string? Price, string? Url, string? Description);