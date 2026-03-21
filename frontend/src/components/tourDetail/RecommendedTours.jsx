import { Link } from 'react-router-dom';

function RecommendedTours({ tours }) {
  return (
    <>
      <h2>Вам также может понравиться!</h2>
      <div className="row mb-75 recommended-offers">{tours.map((tour) => <div key={tour.slug} className="col-md-4 col-12"><div className="offer-block"><div className="img-wrapper"><img src={tour.image} alt={tour.title} className="cover" /></div><div className="cont"><Link to={`/tour/${tour.slug}`} className="title">{tour.title}</Link><div className="d-flex mb-20"><div>{tour.country} - {tour.city}</div><div className="text-right"><div>{tour.durationShort}</div><div>{tour.dates[0].date}</div></div></div><div className="price">от <span>{tour.price}</span></div><div className="button-wrap"><Link to={`/tour/${tour.slug}`} className="btn btn-primary f-12">Тур подробнее <i className="fa fa-angle-right" /></Link></div></div></div></div>)}</div>
    </>
  );
}

export default RecommendedTours;
