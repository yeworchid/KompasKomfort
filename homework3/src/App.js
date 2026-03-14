import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TourDetailPage from './pages/TourDetailPage';
import ToursPage from './pages/ToursPage';
import { tours } from './data/tours';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToursPage />} />
        <Route path="/tour" element={<Navigate to={`/tour/${tours[0].slug}`} replace />} />
        <Route path="/tour/:slug" element={<TourDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
