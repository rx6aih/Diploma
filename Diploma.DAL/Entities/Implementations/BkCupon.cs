using Diploma.DAL.Entities.Abstract;

namespace Diploma.DAL.Entities.Implementations;

public class BkCupon : Cupon
{
    public string ImageUrl { get; set; }
    public string Price { get; set; }
}