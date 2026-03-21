import { useState } from 'react';
import TourBottomNav from './TourBottomNav';

function TourProgramTab({ tabs, activeTab, setActiveTab, tour }) {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <div className="row">
        <div className="col-md-8 col-12">
          <div className="view-gallery">
            <div className="owl-carousel view-gallery-owl">
              <div className="item">
                <a href={tour.galleryImages[currentImage]}>
                  <img src={tour.galleryImages[currentImage]} alt={tour.title} />
                </a>
                <div className="alt">{tour.title}</div>
              </div>
            </div>
            <div className="owl-thumbs owl-carousel">
              {tour.galleryImages.map((image, index) => (
                <div key={image} className={`item${currentImage === index ? ' active' : ''}`}>
                  <button type="button" onClick={() => setCurrentImage(index)}>
                    <img src={image} alt={tour.title} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <h3>Описание тура</h3>
          <div className="tour-description">
            <div>{tour.durationShort}</div>
            <div>
              {tour.type}
              <br />
              Шок-предложения
              <br />
            </div>
            <div>
              <div>
                Места посещений: <a href="/">{tour.country}</a>, <span>{tour.city}</span>
              </div>
            </div>
          </div>

          <div className="page-module">
            <p>
              <br />
              <em>
                {tour.description}
                <br />
                У Вас есть один день, чтобы убедиться, что все сказанное справедливо!
              </em>
            </p>
          </div>

          <h4>Для Вас:</h4>
          <div className="summary-blocks">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-6 col-12"><div><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-60.png" alt="" /><span>Комфортабельный автобус</span></div></div>
              <div className="col-md-4 col-sm-6 col-12"><div><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-110.png" alt="" /><span>Новинка сезона</span></div></div>
            </div>
          </div>
        </div>

        <div className="col-4 hidden-sm-down">
          <a href={`/tour/${tour.slug}`} className="btn btn-primary f-16 w-100 btn-lg price-btn"><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-32.png" alt="" className="icon-fix mr-8" />Забронировать тур</a>
          <div className="text-center f-16 text-gray mb-15 mt-25">Обратитесь к нашим специалистам, чтобы воплотить ваши мечты в реальность</div>
          <div className="contact-info"><div className="text-center f-22 text-gray bold mb-25"><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-33.png" alt="" className="icon-fix mr-8" /><a href="tel:+491731537036" className="phone-link">+49 173 153 7036</a></div><div className="text-center f-20 text-gray bold mb-25">Звоните пн-пт 9.00-18.00, сб 9.00-14.00</div></div>
          <div className="map"><iframe title="Amsterdam map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.8!2d4.9!3d52.37!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDIyJzEyLjAiTiA0wrA1NCcwMC4wIkU!5e0!3m2!1sen!2snl!4v1234567890" width="100%" height="400" style={{ border: 0 }} loading="lazy" /></div>
        </div>
      </div>

      <h3>Маршрут программы тура</h3>
      <div className="row">
        <div className="col-md-8 col-12">
          <div id="day1" className="day-wrap">
            <div className="title"><div className="day-nr">1</div><div>План однодневной поездки</div></div>
            <div className="cont"><div className="page-module"><p>Выезд утром. Время отправления зависит от города выезда. По прибытии в {tour.city} у Вас появляются разные возможности для самостоятельного изучения города.</p><p><strong>Круиз и прогулка по центру</strong> помогут познакомиться с атмосферой города, сделать фотографии и спокойно провести день.</p><p><strong>Свободное время</strong> можно использовать на музеи, кафе и прогулки по историческим кварталам.</p><p>Вечером возвращение в Германию. Время прибытия зависит от города выезда.</p><div className="row">{tour.routeImages.map((image) => <div key={image} className="col-md-4"><a href={image} className="fancy-gallery"><img src={image} alt={tour.city} /></a></div>)}</div></div></div>
          </div>
          <div className="row"><div className="col-lg-6 col-md-12"><div className="page-module bor"><h3 className="f-21 mb-20">Включено в тур:</h3><ul className="included"><li><strong>проезд</strong> до Амстердама и обратно на комфортабельном туристическом автобусе с предоставлением путевой информации по дороге.</li></ul></div></div><div className="col-lg-6 col-md-12"><div className="page-module bor"><h3 className="f-21 mb-20">Дополнительно оплачивается:</h3><ul className="not-included"><li><strong>прогулка на кораблике</strong> по желанию.</li><li><strong>музей восковых фигур Мадам Тюссо</strong> по желанию.</li></ul></div></div></div>
          <div><h3>Дополнительное описание</h3><div className="page-module"><p>Право на корректировку турфирма оставляет за собой. Цены могут меняться в зависимости от сезона. Входные билеты оплачиваются дополнительно.</p><p><strong>Выезд возможен из городов:</strong><br /><strong>{tour.departureCities.join(', ')}</strong></p><p><iframe title="Tour video 1" frameBorder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/KZCJwh5Ny2A" width="560" /></p><p><iframe title="Tour video 2" frameBorder="0" height="315" scrolling="no" src="https://www.youtube.com/embed/p14kOZk3vtE" width="560" /></p></div></div>
        </div>
        <div className="col-4 hidden-sm-down"><ul className="day-list mb-20"><li><a href="#day1"><span><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-39.png" alt="" /><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-39-h.png" alt="" /></span>План однодневной поездки</a></li></ul></div>
      </div>

      <div className="important-notice-block"><div><h3 className="f-22 mb-20">Важное уведомление о путешествии</h3><div className="page-module"><p className="text-danger">Возможность выезда на конкретную дату и размер доплаты Вы найдете в форме заказа, выбрав услугу ЗАБРОНИРОВАТЬ ТУР.</p></div></div><div><div className="important mt-15"><strong>ВНИМАНИЕ</strong>: Базовая стоимость может меняться в зависимости от даты и города отправления.</div><div className="view-price-block bottom"><div className="duration small">{tour.durationShort}</div><div><span className="not-this">от</span> <span>{tour.price}</span> <span>/ чел.</span></div></div></div></div>
      <TourBottomNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tour={tour} />
    </div>
  );
}

export default TourProgramTab;
