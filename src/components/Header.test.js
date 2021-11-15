
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders brand logo', () => {
  render(<Header />);
  const logo = screen.getByRole('img');
  expect(logo).toHaveAttribute('src', 'logo-microsip.svg');
  expect(logo).toHaveAttribute('alt', 'Logo');
});
