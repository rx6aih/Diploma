using Diploma.Analytic.DAL.Enums;

namespace Diploma.Analytic.DAL.Entities;

public class ReactionOnCupon
{
    public ReactionOnCupon(CuponType type, ReactionType reactionType, int cuponId, int userId)
    {
        Type = type;
        ReactionType = reactionType;
        CuponId = cuponId;
        UserId = userId;
    }
    
    public int Id { get; set; }
    public CuponType Type { get;}
    public DateTime ReactionTime { get;} = DateTime.UtcNow;
    public ReactionType ReactionType { get;}

    public int CuponId { get;}
    public int UserId { get;}
}