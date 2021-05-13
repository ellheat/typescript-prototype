import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from './text';

describe('Text: Component', () => {
  test('should find passed text as a children', () => {
    render(<Text>Sample</Text>);
    const children = screen.getByText(/Sample/i);
    expect(children).toBeInTheDocument();
  });
});
