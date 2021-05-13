import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';

describe('App: Component', () => {
  const component = () => (
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );

  test('should render correctly', () => {
    const { container } = render(component());
    expect(container).toMatchSnapshot();
  });

  test('should find page title equals Search Repo from GitHub', () => {
    render(component());
    const titleElement = screen.getByText(/Search Repo from GitHub/i);
    expect(titleElement).toBeInTheDocument();
  });
});
