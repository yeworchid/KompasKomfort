import { Link } from 'react-router-dom';

function TourCard({ tour }) {
  return (
    <li className="result-item list">
      <div className="img-block"><Link to={`/tour/${tour.slug}`} className="img-wrapper"><img src={tour.image} alt={tour.title} className="cover" /></Link><div className="price-block">от <span className="price">{tour.price}</span></div></div>
      <div className="cont"><div><Link to={`/tour/${tour.slug}`} className="title">{tour.title}</Link><div className="text"><p><em>{tour.description}</em></p></div></div><div className="text-right"><Link to={`/tour/${tour.slug}`} className="btn btn-md btn-primary f-12">Подробнее <i className="fa fa-angle-right" /></Link></div></div>
      <div className="dates"><div><span className="block-title">{tour.duration}</span><div className="dates-list">{tour.dates.map((date) => <div key={date.date} className="text-nowrap">{date.date}</div>)}</div><span className="more-dates-modal-trigger text-nowrap"><span className="text">Больше дат </span><i className="fa fa-plus-circle" /></span></div></div>
      <div className="booking-block">
        <form method="get">
          <span className="block-title">Быстрый просчет базовой стоимости:</span>
          <div className="form-group other inline-label"><label className="simple w85">Выберите дату</label><div><select className="form-control"><option aria-label="empty" />{tour.dates.map((date) => <option key={date.date}>{date.date}</option>)}</select></div></div>
          <div className="form-group other inline-label"><label className="simple w85">Выберите город отправления</label><div><select className="form-control"><option aria-label="empty" />{tour.departureCities.map((city) => <option key={city}>{city}</option>)}</select></div></div>
          <div className="form-group other inline-label"><label className="simple w85">Ваша базовая стоимость</label><div><div className="row gutter-6"><div className="col"><span className="hidden f-white f-19 font-weight-bold bg-orange p-5 text-nowrap" /></div><div className="col"><Link to={`/tour/${tour.slug}`} className="btn btn-md btn-primary f-12 red full-w">ЗАКАЗАТЬ <i className="fa fa-angle-right" /></Link></div></div></div></div>
        </form>
      </div>
    </li>
  );
}

export default TourCard;
