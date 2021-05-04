import { render, screen } from '@testing-library/react';
import App from './App';

const LINKS = {
  UNIVERSES: 'Universes',
  STARS: 'Stars',
  IMPRINT: 'Imprint',
};
test('renders three links declared in LINKS', () => {
  render(<App />);
  const universeElement = screen.getByText(LINKS.UNIVERSES);
  const starsElement = screen.getByText(LINKS.STARS);
  const imprintElement = screen.getByText(LINKS.IMPRINT);
  expect(universeElement).toBeInTheDocument();
  expect(starsElement).toBeInTheDocument();
  expect(imprintElement).toBeInTheDocument();
});
