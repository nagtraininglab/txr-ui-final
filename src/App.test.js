import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const headElement = getByText(/TXR - UI/i);
  expect(headElement).toBeInTheDocument();
});
