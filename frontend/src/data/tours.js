function getTourBySlug(list, slug) {
  return list.find((tour) => tour.slug === slug);
}

function getRelatedTours(list, currentTour) {
  if (!currentTour) return [];
  return currentTour.relatedSlugs
    .map((slug) => getTourBySlug(list, slug))
    .filter(Boolean);
}

export { getRelatedTours, getTourBySlug };
