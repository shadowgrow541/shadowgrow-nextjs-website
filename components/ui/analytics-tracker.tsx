"use client"

import { useEffect, useState } from "react"
import { event } from "@/lib/gtag"

interface AnalyticsTrackerProps {
  pageName: string
  userId?: string
}

export const AnalyticsTracker = ({ pageName, userId }: AnalyticsTrackerProps) => {
  const [sessionStart] = useState(Date.now())
  const [scrollDepth, setScrollDepth] = useState(0)
  const [timeOnPage, setTimeOnPage] = useState(0)

  // Track page view
  useEffect(() => {
    event({
      action: 'page_view',
      category: 'navigation',
      label: pageName,
    })

    // Track user session
    if (userId) {
      event({
        action: 'session_start',
        category: 'engagement',
        label: userId,
      })
    }
  }, [pageName, userId])

  // Track scroll depth
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)
      
      if (scrollPercent > scrollDepth && scrollPercent % 25 === 0) {
        setScrollDepth(scrollPercent)
        event({
          action: 'scroll_depth',
          category: 'engagement',
          label: `${pageName}_${scrollPercent}%`,
          value: scrollPercent,
        })
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pageName, scrollDepth])

  // Track time on page
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOnPage(prev => {
        const newTime = prev + 1
        if (newTime % 30 === 0) { // Track every 30 seconds
          event({
            action: 'time_on_page',
            category: 'engagement',
            label: pageName,
            value: newTime,
          })
        }
        return newTime
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [pageName])

  // Track beforeunload
  useEffect(() => {
    const handleBeforeUnload = () => {
      const sessionDuration = Math.round((Date.now() - sessionStart) / 1000)
      event({
        action: 'session_end',
        category: 'engagement',
        label: pageName,
        value: sessionDuration,
      })
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [pageName, sessionStart])

  return null // This component doesn't render anything
}

// Hook for tracking custom events
export const useAnalytics = () => {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    event({
      action,
      category,
      label,
      value,
    })
  }

  const trackClick = (elementName: string, location: string) => {
    trackEvent('click', 'interaction', `${elementName}_${location}`)
  }

  const trackFormSubmission = (formName: string) => {
    trackEvent('form_submit', 'conversion', formName)
  }

  const trackError = (errorType: string, errorMessage: string) => {
    trackEvent('error', 'performance', `${errorType}_${errorMessage}`)
  }

  const trackPerformance = (metric: string, value: number) => {
    trackEvent('performance', 'metrics', metric, value)
  }

  return {
    trackEvent,
    trackClick,
    trackFormSubmission,
    trackError,
    trackPerformance,
  }
}

// Performance monitoring
export const PerformanceMonitor = () => {
  useEffect(() => {
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        event({
          action: 'lcp',
          category: 'performance',
          label: 'largest_contentful_paint',
          value: Math.round(lastEntry.startTime),
        })
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          event({
            action: 'fid',
            category: 'performance',
            label: 'first_input_delay',
            value: Math.round(entry.processingStart - entry.startTime),
          })
        })
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift (CLS)
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        event({
          action: 'cls',
          category: 'performance',
          label: 'cumulative_layout_shift',
          value: Math.round(clsValue * 1000),
        })
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    }

    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      event({
        action: 'page_load',
        category: 'performance',
        label: 'load_time',
        value: loadTime,
      })
    })
  }, [])

  return null
}

// Error boundary with analytics
export const ErrorBoundaryWithAnalytics = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      event({
        action: 'javascript_error',
        category: 'error',
        label: `${error.filename}_${error.lineno}`,
      })
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      event({
        action: 'unhandled_rejection',
        category: 'error',
        label: event.reason?.toString() || 'unknown',
      })
    }

    window.addEventListener('error', handleError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  return <>{children}</>
} 