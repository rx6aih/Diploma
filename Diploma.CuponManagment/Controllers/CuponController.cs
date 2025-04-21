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
    public async Task<IActionResult> UpdateCupon([FromBody]Cupon cupon,[FromQuery]CuponType cuponType, CancellationToken cancellationToken = default)
    {
        switch (cuponType)
        {
            case CuponType.Kfc:
            {
                CuponService<KfcCupon> service = new CuponService<KfcCupon>(new Repository<KfcCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((KfcCupon)cupon, cancellationToken));
            }
            case CuponType.Bk:
            {
                CuponService<BkCupon> service = new CuponService<BkCupon>(new Repository<BkCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((BkCupon)cupon, cancellationToken));
            }
            case CuponType.Mac:
            {
                CuponService<MacCupon> service = new CuponService<MacCupon>(new Repository<MacCupon>(context), cache);
                return Ok(await service.UpdateCuponAsync((MacCupon)cupon, cancellationToken));
            }
            default:
            {
                return BadRequest();
            }
        }
    }
    
    [HttpDelete]
    [Route("DeleteCupon")]
    public async Task<IActionResult> DeleteCuponAsync([FromQuery]int cuponId, [FromQuery]CuponType type, CancellationToken cancellationToken = default)
    {
        switch (type)
        {
            case CuponType.Kfc:
            {
                CuponService<KfcCupon> service = new CuponService<KfcCupon>(new Repository<KfcCupon>(context), cache);
                return Ok(await service.DeleteCuponAsync(cuponId, cancellationToken));
            }
            case CuponType.Bk:
            {
                CuponService<BkCupon> service = new CuponService<BkCupon>(new Repository<BkCupon>(context), cache);
                return Ok(await service.DeleteCuponAsync(cuponId, cancellationToken));
            }
            case CuponType.Mac:
            {
                CuponService<MacCupon> service = new CuponService<MacCupon>(new Repository<MacCupon>(context), cache);
                return Ok(await service.DeleteCuponAsync(cuponId, cancellationToken));
            }
            default:
            {
                return BadRequest();
            }
        }
    }
}