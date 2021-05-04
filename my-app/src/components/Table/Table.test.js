import { render, screen } from '@testing-library/react';
import Table from './Table';

const data = [
    {
      color: "RED",
      id: 123,
      name: "My happy star 123",
      universeId: 333
    }, {
      color: "YELLOW",
      id: 321,
      name: "321 is myy happy star",
      universeId: 333
    }
  ];

test('renders the table element', () => {
  render(<Table data={data}></Table>);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});

