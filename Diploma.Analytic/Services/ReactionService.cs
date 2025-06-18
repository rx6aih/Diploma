using Diploma.Analytic.DAL.Entities;
using Diploma.Analytic.DAL.Enums;
using Diploma.Analytic.DAL.Repositories;
using Diploma.Utility.Repository.Interfaces;

namespace Diploma.Analytic.Services;

public class ReactionService(IRepository<ReactionOnCupon> reactRepository, CuponDetailsRepository cuponDetailsRepository)
{
    public async Task PostReaction(int cuponId, int userId, ReactionType reactionType, CuponType cuponType)
    {
        var reaction = new ReactionOnCupon(cuponType, reactionType, cuponId, userId);
        await reactRepository.CreateAsync(reaction);
        await cuponDetailsRepository.UpdateDetailsAsync(reaction);
    }

    public async Task<int> GetReactions(int cuponId)
    {
        return reactRepository.GetItemsAsync()
            .Result.Count(x => 
                x.CuponId == cuponId);
    }

    public async Task<int> GetConcreteReaction(int cuponId, string type)
    {
        return reactRepository.GetItemsAsync().Result.Count(x=> 
            x.CuponId == cuponId &&
            x.ReactionType.ToString() == type);
    }
}