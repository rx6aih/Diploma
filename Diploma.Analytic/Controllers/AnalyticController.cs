using System.ComponentModel;
using Diploma.Analytic.DAL.Entities;
using Diploma.Analytic.DAL.Enums;
using Diploma.Analytic.Services;
using Microsoft.AspNetCore.Mvc;

namespace Diploma.Analytic.Controllers;

[ApiController]
[Route("[controller]")]
public class AnalyticController(ReactionService reactionService): ControllerBase
{
    [HttpPost]
    [Route("/like")]
    public async Task<IActionResult> Like([FromQuery][DefaultValue(1)] int cuponId, [FromQuery][DefaultValue(1)] int userId, 
        [FromQuery][DefaultValue(ReactionType.Like)] ReactionType reactionType, [FromQuery][DefaultValue(CuponType.Bk)] CuponType cuponType)
    {
        await reactionService.PostReaction(cuponId, userId, reactionType, cuponType);
        return Ok();
    }
}