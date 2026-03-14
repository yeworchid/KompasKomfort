import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageLayout from '../components/common/PageLayout';
import { filterTours, tours } from '../data/tours';
import TourResultsSection from '../components/tours/TourResultsSection';
import ToursSearchSection from '../components/tours/ToursSearchSection';

function getInitialFilters(searchParams) {
  return {
    type: searchParams.get('type') || '',
    country: searchParams.get('country') || '',
    search: searchParams.get('search') || '',
    dateFrom: searchParams.get('dateFrom') || '',
    dateTo: searchParams.get('dateTo') || '',
    city: searchParams.get('city') || '',
  };
}

function ToursPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState(() => getInitialFilters(searchParams));

  useEffect(() => {
    setFilters(getInitialFilters(searchParams));
  }, [searchParams]);

  const options = useMemo(() => ({
    types: [...new Set(tours.map((tour) => tour.type))],
    countries: [...new Set(tours.map((tour) => tour.country))],
    cities: [...new Set(tours.flatMap((tour) => tour.departureCities))],
  }), []);

  const filteredTours = useMemo(() => filterTours(tours, filters), [filters]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFilters((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextParams = {};
    Object.entries(filters).forEach(([key, value]) => {
      if (value) nextParams[key] = value;
    });

    setSearchParams(nextParams);
  };

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Однодневные туры' }]} />
      <ToursSearchSection
        filters={filters}
        options={options}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TourResultsSection tours={filteredTours} />
    </PageLayout>
  );
}

export default ToursPage;
