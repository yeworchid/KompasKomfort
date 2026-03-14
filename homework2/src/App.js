import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TourPage from './pages/TourPage';
import './App.css';

const tours = [
  {
    id: 1,
    slug: 'amsterdam-znakomstvo',
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
    slug: 'antverpen-znakomstvo',
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
    slug: 'bryugge-znakomstvo',
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage tours={tours} />} />
        <Route path="/tour" element={<Navigate to={`/tour/${tours[0].slug}`} replace />} />
        <Route path="/tour/:slug" element={<TourPage tours={tours} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
