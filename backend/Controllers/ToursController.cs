using System.Text.Json;
using KompasKomfortApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace KompasKomfortApi.Controllers;

[ApiController]
[Route("tours")]
public class ToursController : ControllerBase
{
    [HttpGet]
    public IActionResult GetTours(
        [FromQuery] string? type,
        [FromQuery] string? country,
        [FromQuery] string? search,
        [FromQuery] string? dateFrom,
        [FromQuery] string? dateTo,
        [FromQuery] string? city)
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "data", "tours.json");
        var json = System.IO.File.ReadAllText(path);
        var tours = JsonSerializer.Deserialize<List<TourItem>>(json, new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true
        }) ?? [];

        var filteredTours = tours.Where(tour =>
        {
            var matchesType = string.IsNullOrWhiteSpace(type) || tour.Type == type;
            var matchesCountry = string.IsNullOrWhiteSpace(country) || tour.Country == country;
            var matchesSearch = string.IsNullOrWhiteSpace(search) || tour.Title.Contains(search, StringComparison.OrdinalIgnoreCase);
            var matchesCity = string.IsNullOrWhiteSpace(city) || tour.DepartureCities.Contains(city);
            var matchesDates = tour.Dates.Any(item =>
            {
                var currentDate = ParseDate(item.Date);
                var from = ParseDate(dateFrom);
                var to = ParseDate(dateTo);

                if (currentDate == null)
                {
                    return false;
                }

                if (from != null && currentDate < from)
                {
                    return false;
                }

                if (to != null && currentDate > to)
                {
                    return false;
                }

                return true;
            });

            return matchesType && matchesCountry && matchesSearch && matchesCity && matchesDates;
        }).ToList();

        return Ok(filteredTours);
    }

    [HttpGet("filters")]
    public IActionResult GetFilters()
    {
        var path = Path.Combine(Directory.GetCurrentDirectory(), "data", "filters.json");
        var json = System.IO.File.ReadAllText(path);

        return Content(json, "application/json");
    }

    private static DateTime? ParseDate(string? value)
    {
        if (string.IsNullOrWhiteSpace(value))
        {
            return null;
        }

        var parts = value.Split('.');
        if (parts.Length != 3)
        {
            return null;
        }

        if (!int.TryParse(parts[0], out var day) ||
            !int.TryParse(parts[1], out var month) ||
            !int.TryParse(parts[2], out var year))
        {
            return null;
        }

        return new DateTime(year, month, day);
    }
}
