using System.Text.Json;
using Diploma.DAL.Entities.Implementations;
using Diploma.Parser.Configurations;
using Diploma.Parser.Implementations;
using Diploma.Parser.ParserStrategies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace Diploma.Parser.Controllers;

[ApiController]
[Route("Parser")]
public class ParserController(IOptions<ListCuponConfiguration> options) : ControllerBase
{
    private readonly ListCuponConfiguration _cuponConfiguration = options.Value;
    [HttpGet("KfcCupon")]
    public async Task<IActionResult> KfcParse()
    {
        Parser<KfcCupon> parser = new Parser<KfcCupon>(new KfcParserStrategy(),
            _cuponConfiguration.CuponConfiguration[0]);
        
        List<KfcCupon> cupons = await parser.Parse();
        
        if(cupons.Count == 0)
            return NotFound("No cupons found, inner exception");
        
        return Ok(cupons);
    }

    [HttpGet("BkCupon")]
    public async Task<IActionResult> BkParse()
    {
        Parser<BkCupon> parser = new Parser<BkCupon>(new BkParserStrategy(), 
            _cuponConfiguration.CuponConfiguration[1]);
        
        List<BkCupon> cupons = await parser.Parse();
        
        if(cupons.Count == 0)
            return NotFound("No cupons found, inner exception");
        
        return Ok(JsonSerializer.Serialize(cupons));
    }

    [HttpGet("MacCupon")]
    public async Task<IActionResult> MacParse()
    {
        Parser<MacCupon> parser = new Parser<MacCupon>(new MacParserStrategy(),
            _cuponConfiguration.CuponConfiguration[2]);
        
        List<MacCupon> cupons = await parser.Parse();
        
        if(cupons.Count == 0)
            return NotFound("No cupons found, inner exception");
        
        return Ok(cupons);
    }
}