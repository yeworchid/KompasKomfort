import TourBottomNav from './TourBottomNav';

function DatesTab({ tabs, activeTab, setActiveTab, tour }) {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <div className="row">
        <div className="col-md-4 col-12 mb-4 mb-md-0"><h3>Поиск по месяцам</h3><ul className="seasons-list"><li><div className="title"><div className="img-wrapper"><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/winter.png" alt="" /></div>Зима</div><ul className="months-list"><li><a href="/" data-month="december">Декабрь</a><span>({tour.dates.length})</span></li></ul></li></ul></div>
        <div className="col-md-8 col-12"><h3>Даты и стоимость</h3><div className="date-price-table"><div className="title"><div>Дата тура</div><div>от</div></div>{tour.dates.map((departure, index) => <div key={departure.date} className={`departure-date-block${index === 0 ? ' active' : ''}`} data-season="winter" data-month="december"><div className="toggle-next"><div><div className="date">{departure.label}</div><div><a href="/">Базовая стоимость поездки</a></div></div><div><div className="price"><span className="label">от</span><span className="full-price">{departure.price}</span></div><a href={`/tour/${tour.slug}`} className="btn btn-primary f-12">Забронировать</a></div></div>{index === 0 ? <div style={{ display: 'block' }}><div><div className="date">Взрослый</div><div className="price"><span className="label">от</span><span className="full-price">{departure.price}</span></div></div><div><div className="date">Ребенок</div><div className="price"><span className="label">от</span><span className="full-price">{departure.price}</span></div></div></div> : null}</div>)}</div></div>
      </div>
      <TourBottomNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tour={tour} />
    </div>
  );
}

export default DatesTab;
