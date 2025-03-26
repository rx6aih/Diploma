using Diploma.API.Services;
using Diploma.DAL.Entities.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace Diploma.API.Controllers;
[ApiController]
[Route("cupons")]
public class CuponController : ControllerBase
{
    [HttpGet]
    [Route("Test")]
    public async Task<IActionResult> Test()
    {
        BaseProducerService<string> producerService = new("localhost:9092", "requireCupons");
        await producerService.Produce("bk");
        return Ok();
    }
}