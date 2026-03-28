import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import TourDetailPage from './pages/TourDetailPage';
import ToursPage from './pages/ToursPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ToursPage />} />
        <Route path="/tour" element={<Navigate to="/" replace />} />
        <Route path="/tour/:slug" element={<TourDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
