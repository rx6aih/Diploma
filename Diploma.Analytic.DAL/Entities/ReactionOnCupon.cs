using Diploma.Analytic.DAL.Enums;

namespace Diploma.Analytic.DAL.Entities;

public class ReactionOnCupon
{
    public ReactionOnCupon(int id, CuponType type, ReactionType reactionType)
    {
        Id = id;
        Type = type;
        ReactionType = reactionType;
        React(reactionType);
    }
    
    public int Id { get;}
    public CuponType Type { get;}
    public DateTime ReactionTime { get;} = DateTime.UtcNow;
    public ReactionType ReactionType { get;}
    public int CurrentLikes { get; private set; }
    public int CurrentDislikes { get; private set; }

    private void React(ReactionType reactionType)
    {
        switch (reactionType)
        {
            case ReactionType.Like:
                CurrentLikes++;
                break;
            case ReactionType.Dislike:
                CurrentDislikes++;
                break;
        }
    }
}