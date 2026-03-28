import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/common/Breadcrumbs';
import PageLayout from '../components/common/PageLayout';
import { getTourBySlug, getRelatedTours } from '../data/tours';
import DetailHero from '../components/tourDetail/DetailHero';
import RecommendedTours from '../components/tourDetail/RecommendedTours';
import TourTabs from '../components/tourDetail/TourTabs';

function TourDetailPage() {
  const { slug } = useParams();
  const [tours, setTours] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5076/tours')
      .then((response) => response.json())
      .then((data) => {
        setTours(data);
        setIsLoaded(true);
      });
  }, []);

  const tour = getTourBySlug(tours, slug);

  if (!isLoaded) {
    return (
      <PageLayout>
        <div className="container">
          <p>Загрузка тура...</p>
        </div>
      </PageLayout>
    );
  }

  if (!tour) {
    return <Navigate to="/" replace />;
  }

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: tour.title }]} white />
      <div className="container">
        <DetailHero tour={tour} />
        <TourTabs tour={tour} />
        <RecommendedTours tours={getRelatedTours(tours, tour)} />
      </div>
    </PageLayout>
  );
}

export default TourDetailPage;
