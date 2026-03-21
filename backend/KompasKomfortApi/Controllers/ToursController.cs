using Microsoft.AspNetCore.Mvc;

namespace KompasKomfortApi.Controllers;

[ApiController]
[Route("tours")]
public class ToursController : ControllerBase
{
    [HttpGet]
    public IActionResult GetTours()
    {
        return Ok();
    }
}
