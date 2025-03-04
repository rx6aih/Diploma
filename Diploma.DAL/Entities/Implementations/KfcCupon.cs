using Diploma.DAL.Entities.Abstract;

namespace Diploma.DAL.Entities.Implementations;

public class KfcCupon : Cupon
{
    public string ImageUrl { get; set; }
    public string Description { get; set; } = string.Empty;
    public string Price { get; set; }
    public string Url { get; set; } = string.Empty;

}