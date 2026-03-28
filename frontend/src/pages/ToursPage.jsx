import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageLayout from '../components/common/PageLayout';
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
  const [filterConfig, setFilterConfig] = useState(null);
  const [tours, setTours] = useState([]);

  useEffect(() => {
    setFilters(getInitialFilters(searchParams));
  }, [searchParams]);

  useEffect(() => {
    fetch('http://localhost:5076/tours/filters')
      .then((response) => response.json())
      .then((data) => setFilterConfig(data));
  }, []);

  useEffect(() => {
    const query = searchParams.toString();
    const url = query ? `http://localhost:5076/tours?${query}` : 'http://localhost:5076/tours';

    fetch(url)
      .then((response) => response.json())
      .then((data) => setTours(data));
  }, [searchParams]);

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

  if (!filterConfig) {
    return (
      <PageLayout>
        <div className="container">
          <p>Загрузка фильтров...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Однодневные туры' }]} />
      <ToursSearchSection
        filters={filters}
        filterConfig={filterConfig}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TourResultsSection tours={tours} />
    </PageLayout>
  );
}

export default ToursPage;
