import { render, screen } from '@testing-library/react';
import UniversesPage from './UniversesPage';

test('renders the loading... placholder', () => {
  render(<UniversesPage />);
  const tableElement = screen.getByText('Loading...');
  expect(tableElement).toBeInTheDocument();
});

