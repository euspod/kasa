import { render, screen } from '@testing-library/react';
// import App from './App';
import Annonces from './Annonces';


test('renders learn react link', () => {
  render(<Annonces />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
