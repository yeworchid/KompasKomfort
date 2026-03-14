import { useState } from 'react';
import './App.css';

const tours = [
  {
    id: 1,
    title: 'Амстердам - знакомство',
    country: 'Нидерланды',
    city: 'Амстердам',
    price: '39.00 €',
    duration: '1 день',
    description: 'Амстердам - это органный звук, застывший над водой.',
    image: 'https://www.kompass-komfort.de/media/cache/9/7/2/c/3/972c3df2b7ee901b7f7d0fc06f29b4108ee57350.jpeg',
    galleryImages: [
      'https://www.kompass-komfort.de/media/cache/5/7/4/6/f/5746fdc26768239cdd77072e135032a17f57f95f.jpeg',
      'https://www.kompass-komfort.de/media/cache/5/5/4/4/b/5544b9a95a405b2c40d85c43514e52a499007bfb.jpeg',
      'https://www.kompass-komfort.de/media/cache/5/b/0/0/2/5b002864e467d1449bde8e906986855df2053be1.jpeg',
    ],
    dates: [
      { date: '07.12.2025', label: '07.12.2025 - 07.12', price: '39.00 €' },
      { date: '28.12.2025', label: '28.12.2025 - 28.12', price: '39.00 €' },
      { date: '29.12.2025', label: '29.12.2025 - 29.12', price: '39.00 €' },
    ],
    departureCities: ['Дюссельдорф', 'Ахен', 'Бонн', 'Кельн'],
  },
  {
    id: 2,
    title: 'Антверпен - знакомство',
    country: 'Бельгия',
    city: 'Антверпен',
    price: '34.99 €',
    duration: '1 день',
    description: 'Исторический центр, соборы и спокойная прогулка по старому городу.',
    image: 'https://www.kompass-komfort.de/media/cache/8/3/b/6/a/83b6ab7544c3c7699152f5c393f5aba05cee2b83.jpeg',
    galleryImages: [
      'https://www.kompass-komfort.de/media/cache/8/3/b/6/a/83b6ab7544c3c7699152f5c393f5aba05cee2b83.jpeg',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    ],
    dates: [
      { date: '13.12.2025', label: '13.12.2025 - 13.12', price: '34.99 €' },
      { date: '20.12.2025', label: '20.12.2025 - 20.12', price: '34.99 €' },
    ],
    departureCities: ['Дюссельдорф', 'Эссен'],
  },
  {
    id: 3,
    title: 'Брюгге - знакомство',
    country: 'Бельгия',
    city: 'Брюгге',
    price: '34.99 €',
    duration: '1 день',
    description: 'Каналы, старые площади и уютная атмосфера средневекового города.',
    image: 'https://www.kompass-komfort.de/media/cache/f/e/3/9/0/fe39011b6b988c67ff31093377aef3d7344f5f69.jpeg',
    galleryImages: [
      'https://www.kompass-komfort.de/media/cache/f/e/3/9/0/fe39011b6b988c67ff31093377aef3d7344f5f69.jpeg',
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
    ],
    dates: [
      { date: '06.12.2025', label: '06.12.2025 - 06.12', price: '34.99 €' },
      { date: '21.12.2025', label: '21.12.2025 - 21.12', price: '34.99 €' },
    ],
    departureCities: ['Кельн', 'Бонн'],
  },
];

function App() {
  const [selectedTour, setSelectedTour] = useState(tours[0]);
  const visibleTours = tours.slice(0, 3);

  return (
    <div className="homework-app">
      <header className="simple">
        <div className="container">
          <div className="student-header">
            <div>
              <h1>Однодневные туры по Европе</h1>
              <p>Первая версия на React после переноса статической верстки.</p>
            </div>
            <button
              type="button"
              className="btn btn-primary student-button"
              onClick={() => setSelectedTour(tours[0])}
            >
              Показать первый тур
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-35 pb-35">
          <div className="container">
            <div className="student-top">
              <div>
                <span className="student-label">Список туров</span>
                <h2>Что уже получилось перенести</h2>
              </div>
              <div className="student-note">
                Пока без отдельных страниц, просто переключение внутри одного приложения.
              </div>
            </div>

            <ul className="results-list student-results-list">
              {visibleTours.map((tour) => (
                <li key={tour.id} className="result-item list">
                  <div className="img-block">
                    <div className="img-wrapper">
                      <img src={tour.image} alt={tour.title} className="cover" />
                    </div>
                    <div className="price-block">
                      от <span className="price">{tour.price}</span>
                    </div>
                  </div>

                  <div className="cont">
                    <div>
                      <div className="title">{tour.title}</div>
                      <div className="text">
                        <p><em>{tour.description}</em></p>
                        <p>{tour.country}, {tour.city}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <button
                        type="button"
                        className="btn btn-md btn-primary f-12 student-button"
                        onClick={() => setSelectedTour(tour)}
                      >
                        Открыть подробнее <i className="fa fa-angle-right" />
                      </button>
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
          </div>
        </section>

        <section className="pb-35">
          <div className="container">
            <div className="student-detail-card">
              <div className="student-detail-head">
                <div>
                  <span className="student-label">Детальная часть</span>
                  <h2>{selectedTour.title}</h2>
                </div>
                <div className="student-detail-price">от {selectedTour.price}</div>
              </div>

              <div className="student-detail-grid">
                <div>
                  <img
                    src={selectedTour.galleryImages[0]}
                    alt={selectedTour.title}
                    className="student-main-image"
                  />
                </div>

                <div className="student-detail-content">
                  <p>{selectedTour.description}</p>
                  <p>Город: {selectedTour.city}</p>
                  <p>Страна: {selectedTour.country}</p>
                  <p>Города отправления: {selectedTour.departureCities.join(', ')}</p>

                  <div className="student-dates-block">
                    <div className="block-title">Ближайшие даты</div>
                    <ul className="student-dates-list">
                      {selectedTour.dates.map((date) => (
                        <li key={date.date}>
                          <span>{date.label}</span>
                          <strong>{date.price}</strong>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="student-gallery">
                    {selectedTour.galleryImages.map((image) => (
                      <img key={image} src={image} alt={selectedTour.title} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
