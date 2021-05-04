import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';
import { BrowserRouter as Router } from "react-router-dom";

test('renders the navigation element', () => {
  render(<Router><Navigation /></Router>);
  const navElement = screen.getByRole('nav');
  expect(navElement).toBeInTheDocument();
});