import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/桜木花道/i);
  expect(textElement).toBeInTheDocument();
});
