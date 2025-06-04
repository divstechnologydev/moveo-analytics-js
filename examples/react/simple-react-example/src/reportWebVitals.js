import { MoveoOne } from 'moveo-one-analytics';
const analytics = MoveoOne.getInstance("2jNeo4AH5lt9sm9f");
analytics.identify("usr_55e8d71cf96b41dc8d4ecc7c3599d638");
analytics.setLogging(true);
analytics.setFlushInterval(20000);

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      // Track that web vitals have been reported
      analytics.track('content_section', {
        semanticGroup: 'content_section',
        id: 'web_vitals_reported',
        type: 'div',
        action: 'appear',
        value: 'web_vitals_metrics_collected'
      });
    });
  }
};

export default reportWebVitals;
