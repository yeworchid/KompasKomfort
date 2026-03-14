import { Link } from 'react-router-dom';

function TourList({ tours }) {
  return (
    <ul className="results-list hw2-grid">
      {tours.map((tour) => (
        <li key={tour.id} className="result-item list">
          <div className="img-block">
            <Link to={`/tour/${tour.slug}`} className="img-wrapper">
              <img src={tour.image} alt={tour.title} className="cover" />
            </Link>
            <div className="price-block">
              от <span className="price">{tour.price}</span>
            </div>
          </div>

          <div className="cont">
            <div>
              <Link to={`/tour/${tour.slug}`} className="title">{tour.title}</Link>
              <div className="text">
                <p><em>{tour.description}</em></p>
                <p>{tour.country}, {tour.city}</p>
              </div>
            </div>
            <div className="text-right">
              <Link to={`/tour/${tour.slug}`} className="btn btn-md btn-primary f-12 hw2-card-action">
                Подробнее <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>

          <div className="dates">
            <div>
              <span className="block-title">{tour.duration}</span>
              <div className="dates-list">
                {tour.dates.map((date) => (
                  <div key={date.date} className="text-nowrap">{date.date}</div>
                ))}
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TourList;
