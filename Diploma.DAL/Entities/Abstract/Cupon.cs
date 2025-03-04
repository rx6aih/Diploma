namespace Diploma.DAL.Entities.Abstract;

public abstract class Cupon
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string ImageUrl { get; set; }

}