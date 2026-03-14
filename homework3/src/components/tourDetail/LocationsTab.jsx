import TourBottomNav from './TourBottomNav';

function LocationsTab({ tabs, activeTab, setActiveTab, tour }) {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <h3>Список городов отправления</h3>
      <div className="row"><div className="col-md-8 col-12"><form action=""><div><strong id="address-finder-title">Текущий адрес</strong></div><div className="autocomplete-wrapper"><div className="input-group"><input id="address-finder-input" type="text" className="form-control" placeholder="Определите для меня ближайший город отправления" /><span id="get-current-location" /></div><button id="address-finder-search" className="btn btn-primary f-13">Найти</button></div></form></div></div>
      <div className="row flex-column-reverse flex-md-row mb-20"><div className="col-md-8 col-12 mb-4 mb-md-0"><div id="map" className="map-style2" style={{ width: '100%', height: '700px' }} /></div><div className="col-md-4 col-12"><h4>Все города отправления</h4><ul className="checks-list">{tour.departureCities.map((city) => <li key={city} className="locations_toggler"><div className="toggle-next"><span><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-39.png" alt="" /><img src="https://www.kompass-komfort.de/bundles/applicationsonataproject/images/icons/ico-39-h.png" alt="" /></span><span>{city}</span></div><div>Адрес выезда: <strong>{city}, центральная автобусная остановка</strong></div></li>)}</ul></div></div>
      <TourBottomNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tour={tour} />
    </div>
  );
}

export default LocationsTab;
