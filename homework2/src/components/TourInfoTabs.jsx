import { useState } from 'react';

function TourInfoTabs({ tour }) {
  const [activeTab, setActiveTab] = useState('program');

  return (
    <section className="hw2-tabs">
      <div className="hw2-tab-buttons">
        <button type="button" className={activeTab === 'program' ? 'active' : ''} onClick={() => setActiveTab('program')}>
          Программа
        </button>
        <button type="button" className={activeTab === 'dates' ? 'active' : ''} onClick={() => setActiveTab('dates')}>
          Даты
        </button>
        <button type="button" className={activeTab === 'route' ? 'active' : ''} onClick={() => setActiveTab('route')}>
          Маршрут
        </button>
      </div>

      {activeTab === 'program' && (
        <div className="hw2-tab-content">
          <h3>Что входит в тур</h3>
          <p>{tour.description}</p>
          <ul>
            <li>Выезд из Германии на комфортабельном автобусе</li>
            <li>Свободное время в городе {tour.city}</li>
            <li>Сопровождение на русском языке</li>
          </ul>
        </div>
      )}

      {activeTab === 'dates' && (
        <div className="hw2-tab-content">
          <h3>Ближайшие даты</h3>
          <ul>
            {tour.dates.map((date) => (
              <li key={date.date}>{date.label} - {date.price}</li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === 'route' && (
        <div className="hw2-tab-content">
          <h3>Города отправления</h3>
          <ul>
            {tour.departureCities.map((city) => (
              <li key={city}>{city}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default TourInfoTabs;
