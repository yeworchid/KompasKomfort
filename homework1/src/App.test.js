import { render, screen } from '@testing-library/react';
import App from './App';

test('renders tours heading', () => {
  render(<App />);
  expect(screen.getByText(/Однодневные туры по Европе/i)).toBeInTheDocument();
});
