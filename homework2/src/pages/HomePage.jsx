import { useMemo, useState } from 'react';
import Layout from '../components/Layout';
import TourList from '../components/TourList';

function HomePage({ tours }) {
  const [country, setCountry] = useState('');

  const countries = useMemo(() => [...new Set(tours.map((tour) => tour.country))], []);
  const filteredTours = useMemo(() => {
    if (!country) return tours;
    return tours.filter((tour) => tour.country === country);
  }, [country]);

  return (
    <Layout>
      <section className="pb-35">
        <div className="container">
          <div className="hw2-filter">
            <select value={country} onChange={(event) => setCountry(event.target.value)}>
              <option value="">Все страны</option>
              {countries.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <span>Найдено туров: {filteredTours.length}</span>
          </div>
          <TourList tours={filteredTours} />
        </div>
      </section>
    </Layout>
  );
}

export default HomePage;
