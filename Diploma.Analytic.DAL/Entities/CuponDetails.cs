using Diploma.Analytic.DAL.Enums;

namespace Diploma.Analytic.DAL.Entities;

public class CuponDetails
{
    public CuponDetails(int cuponId)
    {
        CuponId = cuponId;
        CurrentLikes = 0;
        CurrentDislikes = 0;
        UpdateDay = DateTime.UtcNow;
    }
    public int CuponId { get; set; }
    public int CurrentLikes { get; private set; }
    public int CurrentDislikes { get; private set; }
    public DateTime UpdateDay { get; set; }
    
    public void React(ReactionType reactionType)
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
        
        UpdateDay = DateTime.UtcNow;
    }
}