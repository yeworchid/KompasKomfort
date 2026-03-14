import TourCard from './TourCard';
function TourResultsSection({ tours }) {
  return (
    <section className="pt-35 pb-35">
      <div className="container">
        {tours.length ? (
          <ul className="results-list">
            {tours.map((tour) => <TourCard key={tour.slug} tour={tour} />)}
          </ul>
        ) : (
          <div className="page-module">
            <p>По вашему фильтру туры не найдены.</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default TourResultsSection;
