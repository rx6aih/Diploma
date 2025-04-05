using System.Text.Json;
using Diploma.API.DataTransferObjects;
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
        HttpClient client = new HttpClient();
        client.BaseAddress = new Uri("http://localhost:5042");
        HttpResponseMessage result = await client.SendAsync(new HttpRequestMessage(HttpMethod.Get, "Parser/bk"));
        List<BkCupon>? cupons = JsonSerializer.Deserialize<List<BkCupon>>(result.Content.ReadAsStringAsync().Result);
        return Ok(cupons);
    }
}