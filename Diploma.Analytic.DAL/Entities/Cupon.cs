namespace Diploma.Analytic.DAL.Entities;

public class Cupon
{
    public int Id { get; set; }
    public string Title { get; set; } = string.Empty;
    public string Type { get; set; } = string.Empty;
    public int Likes { get; set; }
    public int Dislikes { get; set; }
}