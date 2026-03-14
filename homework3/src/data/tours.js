import tours from './tours.json';

function parseDate(value) {
  if (!value) return null;
  const [day, month, year] = value.split('.');
  return new Date(`${year}-${month}-${day}`);
}

function filterTours(list, filters) {
  return list.filter((tour) => {
    const matchesType = !filters.type || tour.type === filters.type;
    const matchesCountry = !filters.country || tour.country === filters.country;
    const matchesSearch = !filters.search || tour.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCity = !filters.city || tour.departureCities.includes(filters.city);
    const fromDate = parseDate(filters.dateFrom);
    const toDate = parseDate(filters.dateTo);

    const matchesDates = tour.dates.some((item) => {
      const currentDate = parseDate(item.date);
      if (!currentDate) return false;
      if (fromDate && currentDate < fromDate) return false;
      if (toDate && currentDate > toDate) return false;
      return true;
    });

    return matchesType && matchesCountry && matchesSearch && matchesCity && matchesDates;
  });
}

function getTourBySlug(slug) {
  return tours.find((tour) => tour.slug === slug);
}

function getRelatedTours(currentTour) {
  if (!currentTour) return [];
  return currentTour.relatedSlugs
    .map((slug) => getTourBySlug(slug))
    .filter(Boolean);
}

export { filterTours, getRelatedTours, getTourBySlug, tours };
