import TourBottomNav from './TourBottomNav';

function ScheduleTab({ tabs, activeTab, setActiveTab, tour }) {
  return (
    <div className="tab-pane fade show active" role="tabpanel">
      <h3>Время выезда/приезда</h3>
      <div className="mb-20"><form action=""><div className="form-group other"><div><label><strong>Выберите дату тура</strong></label></div><select name="departure_date" className="form-control" style={{ width: '200px' }}>{tour.dates.map((item) => <option key={item.date} value={item.date}>{item.date}</option>)}</select></div></form></div>
      <div className="row flex-md-row flex-column-reverse"><div className="col-md-9 col-12"><div id="departure-details-container" className="page-module"><p>Для тура доступны выезды из: {tour.departureCities.join(', ')}.</p><p>Точное время выезда и приезда уточняется после бронирования.</p></div></div></div>
      <TourBottomNav tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} tour={tour} />
    </div>
  );
}

export default ScheduleTab;
