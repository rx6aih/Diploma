using System.Text.Json.Serialization;
using Diploma.DAL.Entities.Abstract;

namespace Diploma.DAL.Entities.Implementations;

public class KfcCupon : Cupon
{
    [JsonPropertyName("description")]
    public string Description { get; set; } = string.Empty;
    
    [JsonPropertyName("price")]
    public string Price { get; set; }
    
    [JsonPropertyName("url")]
    public string Url { get; set; } = string.Empty;

}