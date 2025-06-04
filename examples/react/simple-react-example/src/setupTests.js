import { MoveoOne } from 'moveo-one-analytics';
const analytics = MoveoOne.getInstance("2jNeo4AH5lt9sm9f");
analytics.identify("usr_55e8d71cf96b41dc8d4ecc7c3599d638");
analytics.setLogging(true);
analytics.setFlushInterval(20000);

import '@testing-library/jest-dom';

// Track that the test setup has been initialized
analytics.tick({
  semanticGroup: 'content_section',
  id: 'jest_dom_setup',
  type: 'div',
  action: 'appear',
  value: 'jest-dom setup initialized'
});
