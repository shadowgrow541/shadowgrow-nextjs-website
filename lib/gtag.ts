// lib/gtag.ts
export const GA_TRACKING_ID = 'G-SK1JMYESSG'; // Replace with your ID

// Track page views
export const pageview = (url: string) => {
  (window as any).gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Track specific events
export const event = ({ action, category, label, value }: any) => {
  (window as any).gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
