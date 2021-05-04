import { render, screen } from '@testing-library/react';
import StarsPage from './StarsPage';

test('renders the loading... placholder', () => {
  render(<StarsPage />);
  const tableElement = screen.getByText('Loading...');
  expect(tableElement).toBeInTheDocument();
});

