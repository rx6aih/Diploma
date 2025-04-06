using System.Text.Json;
using Diploma.API.DataTransferObjects;
using Diploma.API.Services;
using Diploma.DAL.Context;
using Diploma.DAL.Entities.Implementations;
using Diploma.DAL.Implementations;
using Diploma.DAL.Interfaces;
using Diploma.Utility.ServiceCommunication;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Caching.Distributed;

namespace Diploma.API.Controllers;
[ApiController]
[Route("Cupons")]
public class CuponController(CuponManagerContext context, IDistributedCache cache) : ControllerBase
{
    [HttpGet]
    [Route("BkCupons")]
    public async Task<IActionResult> GetBkCupons()
    {
        CuponService <BkCupon> service = new CuponService<BkCupon>(new Repository<BkCupon>(context), cache);
        return Ok(await service.GetCupons());
    }
    
    [HttpGet]
    [Route("KfcCupons")]
    public async Task<IActionResult> GetKfcCupons()
    {
        CuponService <KfcCupon> service = new CuponService<KfcCupon>(new Repository<KfcCupon>(context), cache);
        return Ok(await service.GetCupons());
    }
    
    [HttpGet]
    [Route("MacCupons")]
    public async Task<IActionResult> GetMacCupons()
    {
        CuponService <MacCupon> service = new CuponService<MacCupon>(new Repository<MacCupon>(context), cache);
        return Ok(await service.GetCupons());
    }
}