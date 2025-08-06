// SEO Performance Monitoring and Utilities

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogImage: string
  twitterImage: string
}

export const defaultSEO: SEOConfig = {
  title: "ShadowGrow - Complete Digital Commerce Platform",
  description: "Complete website script for selling firmware, software, e-books, and digital products. Built with Next.js, React Admin, Node.js, and AI-powered analytics.",
  keywords: [
    "digital commerce platform",
    "software selling website",
    "firmware sales platform",
    "e-book selling script",
    "digital product marketplace",
    "Next.js e-commerce",
    "React Admin dashboard",
    "AI-powered analytics",
    "license management system",
    "automated delivery system"
  ],
  canonical: "https://shadowgrow.com",
  ogImage: "https://shadowgrow.com/og-image.png",
  twitterImage: "https://shadowgrow.com/og-image.png"
}

// SEO Score Calculator
export const calculateSEOScore = (pageData: any): number => {
  let score = 0
  const maxScore = 100

  // Title optimization (25 points)
  if (pageData.title && pageData.title.length >= 30 && pageData.title.length <= 60) {
    score += 25
  } else if (pageData.title) {
    score += Math.max(0, 25 - Math.abs(pageData.title.length - 45) * 2)
  }

  // Description optimization (20 points)
  if (pageData.description && pageData.description.length >= 120 && pageData.description.length <= 160) {
    score += 20
  } else if (pageData.description) {
    score += Math.max(0, 20 - Math.abs(pageData.description.length - 140) * 0.5)
  }

  // Keywords presence (15 points)
  if (pageData.keywords && pageData.keywords.length >= 5) {
    score += 15
  } else if (pageData.keywords) {
    score += Math.min(15, pageData.keywords.length * 3)
  }

  // Headings structure (15 points)
  if (pageData.headings && pageData.headings.h1 === 1) {
    score += 15
  }

  // Image optimization (10 points)
  if (pageData.images && pageData.images.every((img: any) => img.alt)) {
    score += 10
  }

  // Internal linking (10 points)
  if (pageData.internalLinks && pageData.internalLinks.length >= 3) {
    score += 10
  }

  // Meta tags (5 points)
  if (pageData.hasCanonical && pageData.hasOpenGraph && pageData.hasTwitter) {
    score += 5
  }

  return Math.min(maxScore, Math.round(score))
}

// SEO Recommendations Generator
export const generateSEORecommendations = (pageData: any): string[] => {
  const recommendations: string[] = []

  // Title recommendations
  if (!pageData.title) {
    recommendations.push("Add a unique, descriptive title tag")
  } else if (pageData.title.length < 30) {
    recommendations.push("Title is too short. Aim for 30-60 characters")
  } else if (pageData.title.length > 60) {
    recommendations.push("Title is too long. Keep it under 60 characters")
  }

  // Description recommendations
  if (!pageData.description) {
    recommendations.push("Add a meta description")
  } else if (pageData.description.length < 120) {
    recommendations.push("Meta description is too short. Aim for 120-160 characters")
  } else if (pageData.description.length > 160) {
    recommendations.push("Meta description is too long. Keep it under 160 characters")
  }

  // Keywords recommendations
  if (!pageData.keywords || pageData.keywords.length < 3) {
    recommendations.push("Add more relevant keywords")
  }

  // Headings recommendations
  if (!pageData.headings || pageData.headings.h1 !== 1) {
    recommendations.push("Ensure exactly one H1 tag per page")
  }

  // Images recommendations
  if (pageData.images && pageData.images.some((img: any) => !img.alt)) {
    recommendations.push("Add alt text to all images")
  }

  // Internal linking recommendations
  if (!pageData.internalLinks || pageData.internalLinks.length < 3) {
    recommendations.push("Add more internal links to improve site structure")
  }

  return recommendations
}

// Performance Monitoring
export const monitorPagePerformance = () => {
  if (typeof window !== 'undefined') {
    // Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime)
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime)
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', entry.value)
        }
      }
    })

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
  }
}

// SEO-friendly URL generator
export const generateSEOFriendlyURL = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Schema.org markup generator
export const generateProductSchema = (product: any) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image,
    "offers": {
      "@type": "Offer",
      "price": product.price,
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": product.reviewCount
    }
  }
}

// Breadcrumb schema generator
export const generateBreadcrumbSchema = (breadcrumbs: string[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb,
      "item": `https://shadowgrow.com/${crumb.toLowerCase().replace(/\s+/g, '-')}`
    }))
  }
} 