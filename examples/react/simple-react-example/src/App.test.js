import { render, screen } from '@testing-library/react';
import App from './App';

import { MoveoOne } from 'moveo-one-analytics';
const analytics = MoveoOne.getInstance("2jNeo4AH5lt9sm9f");
analytics.identify("usr_55e8d71cf96b41dc8d4ecc7c3599d638");
analytics.setLogging(true);
analytics.setFlushInterval(20000);

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  // Track that the intro paragraph appears in the DOM
  analytics.tick({
    semanticGroup: 'content_section',
    id: 'learn_react_link',
    type: 'text',
    action: 'view',
    value: 'learn react'
  });
});
