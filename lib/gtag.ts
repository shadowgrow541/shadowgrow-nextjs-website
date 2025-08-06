// lib/gtag.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Custom events for ShadowGrow
export const trackButtonClick = (buttonName: string, location: string) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  })
}

export const trackFormSubmission = (formName: string) => {
  event({
    action: 'form_submit',
    category: 'lead_generation',
    label: formName,
  })
}

export const trackPageView = (pageName: string) => {
  event({
    action: 'page_view',
    category: 'navigation',
    label: pageName,
  })
}

export const trackProductInterest = (productType: string) => {
  event({
    action: 'product_interest',
    category: 'engagement',
    label: productType,
  })
}

// Declare gtag on window object
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
