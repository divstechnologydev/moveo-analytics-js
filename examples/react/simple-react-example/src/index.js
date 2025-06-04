import { MoveoOne } from 'moveo-one-analytics';
const analytics = MoveoOne.getInstance("2jNeo4AH5lt9sm9f");
analytics.identify("usr_55e8d71cf96b41dc8d4ecc7c3599d638");
analytics.setLogging(true);
analytics.setFlushInterval(20000);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Start analytics context for the main app
analytics.start('main_app', {
  version: '1.0.0',
  environment: process.env.NODE_ENV || 'development'
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Track appearance of the root app container
window.addEventListener('DOMContentLoaded', () => {
  analytics.tick({
    semanticGroup: 'content_section',
    id: 'root_app_container',
    type: 'div',
    action: 'appear',
    value: 'App Root Mounted'
  });
});

reportWebVitals();
