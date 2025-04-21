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
}