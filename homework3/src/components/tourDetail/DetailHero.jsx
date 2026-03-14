import { Link } from 'react-router-dom';

function DetailHero({ tour }) {
  return (
    <>
      <div className="mb-15"><Link to="/"><i className="fa fa-angle-left" /> Oбратно к списку</Link></div>
      <div className="view-title">
        <h1>{tour.title}</h1>
        <div>
          <ul className="socials"><li className="first">Поделитесь впечатлениями:</li><li><div className="social-share"><a href="https://facebook.com" className="social-icon" aria-label="Facebook"><i className="fa fa-facebook" /></a><a href="https://twitter.com" className="social-icon" aria-label="Twitter"><i className="fa fa-twitter" /></a><a href="https://vk.com" className="social-icon" aria-label="VK"><i className="fa fa-vk" /></a></div></li></ul>
          <div className="view-price-block"><div className="duration">{tour.durationShort}</div><div>от <span>{tour.price}</span> <span>/ чел.</span></div><a href={`/tour/${tour.slug}`} className="btn btn-primary btn-lg f-16 price-btn"><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-47.png" alt="" className="icon-fix mr-8" />Забронировать тур</a></div>
        </div>
      </div>
    </>
  );
}

export default DetailHero;
