using System.Text.Json.Serialization;

namespace Diploma.DAL.Entities.Abstract;

public abstract class Cupon
{
    [JsonPropertyName("id")]
    public int Id { get; set; }
    
    [JsonPropertyName("title")]
    public string Title { get; set; } = string.Empty;
    
    [JsonPropertyName("imageUrl")]
    public string ImageUrl { get; set; }

    [JsonPropertyName("likes")]
    public int Likes { get; set; }
    
    [JsonPropertyName("dislikes")]
    public int Dislikes { get; set; }
    
    [JsonPropertyName("updateDay")]
    public DateTime UpdateDay { get; set; } = DateTime.UtcNow;
}
