using System.Text.Json;
using Diploma.API.DataTransferObjects;
using Diploma.API.Services;
using Diploma.DAL.Entities.Implementations;
using Diploma.Utility.ServiceCommunication;
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
        HttpCommunicator communicator = new HttpCommunicator();
        return Ok(JsonSerializer.Deserialize<List<BkCupon>>(communicator
               .Send("http://localhost:5042", "Parser/bk")
               .Result.Content.ReadAsStringAsync().Result));
    }
}