namespace KompasKomfortApi.Models;

public class TourItem
{
    public int Id { get; set; }
    public string Slug { get; set; } = "";
    public string Title { get; set; } = "";
    public string Country { get; set; } = "";
    public string City { get; set; } = "";
    public string Type { get; set; } = "";
    public string Price { get; set; } = "";
    public string Duration { get; set; } = "";
    public string DurationShort { get; set; } = "";
    public string Description { get; set; } = "";
    public string Image { get; set; } = "";
    public List<string> GalleryImages { get; set; } = [];
    public List<string> RouteImages { get; set; } = [];
    public List<TourDateItem> Dates { get; set; } = [];
    public List<string> DepartureCities { get; set; } = [];
    public List<string> RelatedSlugs { get; set; } = [];
}

public class TourDateItem
{
    public string Date { get; set; } = "";
    public string Label { get; set; } = "";
    public string Price { get; set; } = "";
}
