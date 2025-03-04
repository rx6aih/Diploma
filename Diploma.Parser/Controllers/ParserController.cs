using Diploma.DAL.Entities.Implementations;
using Diploma.Parser.Configurations;
using Diploma.Parser.Implementations;
using Diploma.Parser.ParserStrategies;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using OpenQA.Selenium;

namespace Diploma.Parser.Controllers;

[ApiController]
[Route("Parser")]
public class ParserController(IOptions<ListCuponConfiguration> options) : ControllerBase
{
    private readonly ListCuponConfiguration _cuponConfiguration = options.Value;
    [HttpGet("kfc")]
    public async Task<IActionResult> KfcParse()
    {
        Parser<KfcCupon> parser = new Parser<KfcCupon>(new KfcParserStrategy(),
            _cuponConfiguration.CuponConfiguration[0]);
        return Ok(await parser.Parse());
    }
}