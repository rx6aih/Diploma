using Diploma.Analytic.DAL.Context;
using Diploma.Analytic.DAL.Entities;
using Diploma.Utility.Repository.Implementations;
using Microsoft.EntityFrameworkCore;

namespace Diploma.Analytic.DAL.Repositories;

public class CuponDetailsRepository(AnalyticContext context) : Repository<CuponDetails>(context)
{
    public async Task UpdateDetailsAsync(ReactionOnCupon reaction)
    {
        CuponDetails? cuponDetail =
            await context.CuponDetails.FirstOrDefaultAsync(cd => cd.CuponId == reaction.CuponId);
        if (cuponDetail == null)
        {
            cuponDetail = new CuponDetails(reaction.CuponId);
            cuponDetail.React(reaction.ReactionType);
            await context.CuponDetails.AddAsync(cuponDetail);
            await context.SaveChangesAsync();
        }
        else
        {
            cuponDetail.React(reaction.ReactionType);
            context.CuponDetails.Update(cuponDetail);
            await context.SaveChangesAsync();
        }
    }
}