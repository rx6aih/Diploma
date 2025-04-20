using Diploma.API.Services;
using Diploma.DAL.Context;
using Diploma.DAL.Entities.Abstract;
using Diploma.DAL.Entities.Implementations;
using Diploma.DAL.Enums;
using Diploma.Utility.Repository.Implementations;
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

    [HttpPut]
    [Route("UpdateCupon")]
    public async Task<IActionResult> UpdateCupon(Cupon cupon, CuponType cuponType)
    {
        switch (cuponType)
        {
            case CuponType.Kfc:
            {
                CuponService<KfcCupon> service = new CuponService<KfcCupon>(new Repository<KfcCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((KfcCupon)cupon, CancellationToken.None));
            }
            case CuponType.Bk:
            {
                CuponService<BkCupon> service = new CuponService<BkCupon>(new Repository<BkCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((BkCupon)cupon, CancellationToken.None));
            }
            case CuponType.Mac:
            {
                CuponService<MacCupon> service = new CuponService<MacCupon>(new Repository<MacCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((MacCupon)cupon, CancellationToken.None));
            }
            default:
            {
                return BadRequest();
            }
        }
    }
}