"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"
import { 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Database, 
  Edit3, 
  FileText, 
  FolderKanban, 
  Globe, 
  Layers, 
  Mail, 
  Moon, 
  ShoppingCart, 
  Sun, 
  Tag, 
  Truck, 
  TvMinimalPlay, 
  Users, 
  Zap,
  Brain,
  BarChart3,
  Shield,
  Rocket,
  Sparkles,
  TrendingUp,
  Cpu,
  Cloud,
  Lock,
  Download,
  Upload,
  CreditCard,
  Globe2,
  Smartphone,
  Monitor,
  Server,
  Clock,
  Star,
  Award,
  Headphones,
  RefreshCw,
  Play,
  ExternalLink
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FaQuoteLeft } from "react-icons/fa"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { trackButtonClick, trackProductInterest } from "@/lib/gtag"

// Import new UI components
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { SocialProof } from "@/components/ui/social-proof"
import { ExitIntentPopup } from "@/components/ui/exit-intent-popup"
import { ParticleBackground } from "@/components/ui/particle-background"
import { TypewriterText } from "@/components/ui/typewriter-text"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { ABTest } from "@/components/ui/ab-test"
import { Swipeable } from "@/components/ui/touch-gestures"
import { AnalyticsTracker, PerformanceMonitor } from "@/components/ui/analytics-tracker"

export default function LandingPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Track page view
    if (typeof window !== 'undefined') {
      trackProductInterest('landing_page_view')
    }
  }, [])

  const handleButtonClick = (buttonName: string, location: string) => {
    trackButtonClick(buttonName, location)
  }

  const handleProductInterest = (productType: string) => {
    trackProductInterest(productType)
  }

  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-heading font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          ShadowGrow
        </motion.div>
      </div>
    )
  }

  return (
    <ErrorBoundary>
      {/* Analytics and Performance Monitoring */}
      <AnalyticsTracker pageName="landing_page" />
      <PerformanceMonitor />
      
      {/* Enhanced UI Components */}
      <ScrollProgress />
      <BackToTop />
      <SocialProof />
      {/* <ExitIntentPopup /> */}
      <ParticleBackground />

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "ShadowGrow",
            "url": "https://shadowgrow.com",
            "description": "Complete digital commerce platform for selling software, firmware, and e-books",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://shadowgrow.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "ShadowGrow Digital Commerce Platform",
            "description": "Complete website script for selling firmware, software, e-books, and digital products",
            "brand": {
              "@type": "Brand",
              "name": "ShadowGrow"
            },
            "offers": {
              "@type": "Offer",
              "price": "220",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "150"
            }
          })
        }}
      />

      <div className="flex min-h-screen flex-col bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 pt-4 pb-4">
        <Header />
        <main className="flex-1">
          <Swipeable
            onSwipeLeft={() => console.log('Swiped left')}
            onSwipeRight={() => console.log('Swiped right')}
          >
            <HeroSection />
            <ProductsSection />
            <AnalyticsSection />
            <TestimonialsSection />
            <PricingSection />
            <CtaSection />
          </Swipeable>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl floating pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl floating pointer-events-none" style={{ animationDelay: '1s' }}
        />
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />
        {/* New geometric pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rotate-45 pointer-events-none"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rotate-12 pointer-events-none"></div>
          <div className="absolute bottom-1/4 left-1/3 w-40 h-40 border border-white/20 -rotate-30 pointer-events-none"></div>
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Enhanced Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md px-8 py-4 text-sm font-medium text-blue-200 border border-blue-400/30 mb-10 shadow-lg pulse-glow"
          >
            <Sparkles className="h-5 w-5 text-yellow-400" />
            AI-Powered Digital Commerce Platform
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </motion.div>
          
          {/* Enhanced Main Heading with Typewriter Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-6xl md:text-8xl font-heading font-semibold tracking-tight mb-10 leading-[0.85]"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-lg text-reveal">
              <TypewriterText 
                text="Sell Digital Files" 
                speed={150}
                className="inline-block"
              />
            </span>
            <br />
            <span className="text-5xl md:text-7xl bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-lg">
              <TypewriterText 
                text="Like a Pro" 
                speed={100}
                className="inline-block"
              />
            </span>
          </motion.h1>
          
          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-sm md:text-xl text-gray-200 leading-relaxed mb-16 max-w-4xl mx-auto font-body font-light !leading-loose"
          >
            Complete website script for selling firmware, software, e-books, and digital products. 
            Built with Next.js, React Admin, Node.js, and AI-powered analytics.
          </motion.p>
          
          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
          >
            <Link href="/contact-us">
              <Button 
                size="lg" 
                className="gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md px-10 py-6 text-lg font-medium border-0 btn-enhanced ripple"
                onClick={() => trackButtonClick('get_started', 'hero')}
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="#demo">
              <Button 
                size="lg" 
                variant="outline"
                className="gap-3 border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 px-10 py-6 text-lg font-medium shadow-xl hover:shadow-2xl btn-enhanced"
                onClick={() => trackButtonClick('live_demo', 'hero')}
              >
                <Play className="h-5 w-5" />
                Live Demo
              </Button>
            </Link>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="grid grid-cols-3 gap-12 max-w-3xl mx-auto"
          >
            {[
              { number: "100%", label: "Customizable", color: "from-blue-400 to-cyan-400" },
              { number: "AI", label: "Powered", color: "from-purple-400 to-pink-400" },
              { number: "Modern", label: "Tech Stack", color: "from-green-400 to-emerald-400" }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group hover-lift"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-4xl md:text-5xl font-heading font-semibold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 drop-shadow-lg`}>
                  {stat.number}
                </div>
                <div className="text-base md:text-lg text-gray-300 font-body font-medium group-hover:text-white transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> 

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="absolute -bottom-24 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-8 h-12 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-md cursor-pointer hover:border-white/60 transition-colors duration-300"
            >
              <motion.div
                animate={{
                  y: [0, 16, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-1 h-4 bg-gradient-to-b from-white to-transparent rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="py-24 md:py-40 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Built for Digital Commerce
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-body font-light leading-relaxed">
            Complete solution for selling any type of digital product with modern technology and AI-powered features.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* E-commerce Core */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative"
            onClick={() => trackProductInterest('ecommerce_core')}
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-blue-600/20 backdrop-blur-md border border-blue-400/30 shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 relative overflow-hidden interactive-card">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full blur-xl group-hover:bg-purple-400/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500"
                  >
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-blue-200 transition-colors duration-300">E-commerce Core</h3>
                  <p className="text-gray-300 font-body text-sm">
                    Complete digital commerce solution
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Digital & downloadable products",
                    "Auto email delivery system",
                    "Billing & invoice management",
                    "Multiple payment gateways",
                    "Orders & transactions"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full group-hover/item:bg-blue-300 transition-colors duration-300"></div>
                      <span className="text-gray-200 font-body text-sm group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Management & Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative"
            onClick={() => trackProductInterest('management_marketing')}
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-teal-600/20 backdrop-blur-md border border-green-400/30 shadow-2xl hover:shadow-green-500/25 transition-all duration-500 relative overflow-hidden interactive-card">
              {/* Animated background elements */}
              <div className="absolute top-0 left-0 w-28 h-28 bg-green-400/10 rounded-full blur-2xl group-hover:bg-green-400/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-teal-400/10 rounded-full blur-xl group-hover:bg-teal-400/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-all duration-500"
                  >
                    <BarChart3 className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-green-200 transition-colors duration-300">Management & Marketing</h3>
                  <p className="text-gray-300 font-body text-sm">
                    Advanced tools & marketing features
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Articles & blog management",
                    "Reviews & comments system",
                    "Coupon codes & marketing",
                    "User permissions management",
                    "Mail templates & bulk emails"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full group-hover/item:bg-green-300 transition-colors duration-300"></div>
                      <span className="text-gray-200 font-body text-sm group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advanced Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative md:col-span-2 lg:col-span-1"
            onClick={() => trackProductInterest('advanced_features')}
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-orange-500/20 via-red-500/10 to-pink-600/20 backdrop-blur-md border border-orange-400/30 shadow-2xl hover:shadow-orange-500/25 transition-all duration-500 relative overflow-hidden interactive-card">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-400/10 rounded-full blur-2xl group-hover:bg-orange-400/20 transition-all duration-500"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-400/10 rounded-full blur-xl group-hover:bg-pink-400/20 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/30 transition-all duration-500"
                  >
                    <Zap className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-white group-hover:text-orange-200 transition-colors duration-300">Advanced Features</h3>
                  <p className="text-gray-300 font-body text-sm">
                    Enterprise-level capabilities
                  </p>
                </div>
                
                <div className="space-y-3">
                  {[
                    "Download & bandwidth packages",
                    "System control & API access",
                    "Developer support tools",
                    "Advanced analytics & reporting",
                    "Smart management interface"
                  ].map((item, index) => (
                    <motion.div 
                      key={index} 
                      className="flex items-center gap-3 group/item"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-orange-400 rounded-full group-hover/item:bg-orange-300 transition-colors duration-300"></div>
                      <span className="text-gray-200 font-body text-sm group-hover/item:text-white transition-colors duration-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnalyticsSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Powerful Analytics
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto font-body font-light">
            Make data-driven decisions with our comprehensive analytics and AI-powered insights.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {analyticsFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 interactive-card">
                <div className={`mb-4 p-3 rounded-xl bg-gradient-to-r ${feature.gradient} w-fit shadow-lg backdrop-blur-md`}>
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-heading font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed font-body">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "500%", label: "Average Revenue Increase" },
              { number: "24/7", label: "Real-time Monitoring" },
              { number: "AI", label: "Powered Insights" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center hover-lift"
              >
                <div className="text-4xl font-heading font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-body">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "ShadowGrow transformed our firmware business. The automated delivery and analytics helped us scale 10x faster.",
      author: "Jitendra Dalchand",
      role: "Founder, Filewale",
      initials: "JD",
      company: "Filewale",
      rating: 5,
      color: "from-blue-500 to-purple-600"
    },
    {
      quote: "The AI-powered insights helped us optimize our pricing strategy and increase our conversion rates by 300%.",
      author: "Ayesha Kapoor",
      role: "Founder, Paid Firmware",
      initials: "AK",
      company: "Paid Firmware",
      rating: 5,
      color: "from-green-500 to-teal-600"
    },
    {
      quote: "Best investment we made. The platform handles everything from sales to delivery, letting us focus on product development.",
      author: "Nitish Pandey",
      role: "Founder, GSM Sathi",
      initials: "NP",
      company: "GSM Sathi",
      rating: 5,
      color: "from-orange-500 to-pink-600"
    },
  ]

  return (
    <section id="testimonials" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl pointer-events-none"
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md px-6 py-3 text-sm font-medium text-blue-200 border border-blue-400/30 mb-8 shadow-lg"
          >
            <Star className="h-4 w-4 text-yellow-400" />
            Trusted by 500+ Businesses
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </motion.div>
          
          <h2 className="text-5xl font-heading font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-body font-light leading-relaxed">
            See how our platform is helping businesses scale their digital product sales with incredible results.
          </p>
        </motion.div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`relative h-full rounded-3xl p-8 bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 interactive-card overflow-hidden`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${t.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                  className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
                />
                
                <div className="relative z-10">
                  {/* Quote icon with animation */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                    className="mb-6"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${t.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <FaQuoteLeft className="text-white text-xl" />
                    </div>
                  </motion.div>
                  
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(t.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Quote text */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-8 font-body font-medium group-hover:text-white transition-colors duration-300">
                    "{t.quote}"
                  </p>
                  
                  {/* Author section */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Avatar className="h-14 w-14 ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300">
                        <AvatarFallback className={`bg-gradient-to-r ${t.color} text-white font-bold text-lg`}>
                          {t.initials}
                        </AvatarFallback>
                      </Avatar>
                    </motion.div>
                    <div className="flex-1">
                      <p className="font-heading font-bold text-white text-lg group-hover:text-blue-200 transition-colors duration-300">
                        {t.author}
                      </p>
                      <p className="text-sm text-gray-400 font-body group-hover:text-gray-300 transition-colors duration-300">
                        {t.role}
                      </p>
                      <p className={`text-sm font-body font-semibold bg-gradient-to-r ${t.color} bg-clip-text text-transparent`}>
                        {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Simple Pricing
          </h2>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto font-body font-light">
            One-time payment. No monthly fees. No limitations. Hosted on your server.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group max-w-md w-full">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" 
            style={{ zIndex: 99 }}
            >
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pulse-glow">
                Best Value
              </span>
            </div>
            
            <div className="h-full p-8 rounded-2xl border-2 border-white/20 bg-white/10 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 interactive-card">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-heading font-semibold mb-2 text-white">Complete Package</h3>
                <div className="mb-4">
                  <span className="text-5xl font-heading font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    $220
                  </span>
                  <span className="text-gray-300 text-lg font-body"> USD</span>
                </div>
                <p className="text-gray-300 font-body">One-time payment, no recurring fees</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited digital products",
                  "Unlimited customers",
                  "Advanced AI analytics",
                  "Multiple payment gateways",
                  "Custom branding & white-label",
                  "API access",
                  "Email support",
                  "Mobile responsive design",
                  "Hosted on your server",
                  "Full source code included",
                  "Lifetime updates",
                  "No monthly fees"
                ].map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-200 font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* New Features Highlight */}
              <div className="mb-8 p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-green-500/30 neumorphic">
                <h4 className="text-lg font-heading font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  Premium Features Included
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Headphones className="h-4 w-4 text-green-400" />
                    <span className="text-sm text-gray-200 font-body">Support & Updates Free for 1 Year</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="h-4 w-4 text-blue-400" />
                    <span className="text-sm text-gray-200 font-body">Lifetime Valid License for Single Domain</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCw className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-gray-200 font-body">Regular Security Updates</span>
                  </div>
                </div>
              </div>
              
              <Link href="/contact-us">
                <Button 
                  className="w-full gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md font-medium btn-enhanced ripple"
                  onClick={() => trackButtonClick('get_website_script', 'pricing')}
                >
                  Launch Your Website Today <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              
              <p className="text-xs text-gray-400 text-center mt-4 font-body">
                * Full control over your data and infrastructure.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-4xl font-heading font-semibold tracking-tight sm:text-5xl md:text-6xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-xl max-w-3xl mx-auto opacity-90 mb-12 text-gray-200 font-body font-light">
            Start selling digital files like firmware, software, and e-books with our complete website solution. 
            Built with Next.js, React Admin, Node.js, and AI-powered analytics.
          </p>

          {/* Demo Section */}
          <div className="w-full max-w-6xl mb-12">
            <h3 className="text-2xl font-heading font-semibold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Try Our Live Demo
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Customer Store */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <ShoppingCart className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">Customer Store</h4>
                  <p className="text-gray-300 text-sm">Browse and purchase products</p>
                </div>
                
                <a 
                  href="https://demo.shadowgrow.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                  onClick={() => trackButtonClick('demo_customer_store', 'cta')}
                >
                  <ExternalLink className="inline h-4 w-4 mr-2" />
                  Visit Store
                </a>
              </motion.div>

              {/* Customer Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">Customer Dashboard</h4>
                  <p className="text-gray-300 text-sm">Manage your purchases</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://demo.shadowgrow.com/auth/login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                    onClick={() => trackButtonClick('demo_customer_dashboard', 'cta')}
                  >
                    <ExternalLink className="inline h-4 w-4 mr-2" />
                    Access Dashboard
                  </a>
                  
                  <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-gray-400 text-xs mb-2 font-medium">Login Credentials:</div>
                    <div className="text-gray-300 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-mono text-green-400">demo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Password:</span>
                        <span className="font-mono text-green-400">demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Admin Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-md rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-heading font-semibold text-white mb-2">Admin Dashboard</h4>
                  <p className="text-gray-300 text-sm">Manage your business</p>
                </div>
                
                <div className="space-y-4">
                  <a 
                    href="https://admin-demo.shadowgrow.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-center"
                    onClick={() => trackButtonClick('demo_admin_dashboard', 'cta')}
                  >
                    <ExternalLink className="inline h-4 w-4 mr-2" />
                    Access Admin Panel
                  </a>
                  
                  <div className="bg-black/30 rounded-xl p-4 backdrop-blur-sm">
                    <div className="text-gray-400 text-xs mb-2 font-medium">Login Credentials:</div>
                    <div className="text-gray-300 text-xs space-y-1">
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="font-mono text-green-400">demo</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Password:</span>
                        <span className="font-mono text-green-400">demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact-us">
              <Button 
                size="lg" 
                variant="secondary" 
                className="gap-2 bg-white/20 backdrop-blur-md text-white hover:bg-white/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 font-medium btn-enhanced"
                onClick={() => trackButtonClick('contact_us', 'cta')}
              >
                <Play className="h-4 w-4" />
               Contact Us
              </Button>
            </Link>
            <Link href="https://wa.me/12367015329" target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-2 border-green-500/30 bg-green-500/10 backdrop-blur-md text-green-400 hover:bg-green-500/20 transition-all duration-300 font-medium btn-enhanced"
                onClick={() => trackButtonClick('talk_team', 'cta')}
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Talk with Our Team
              </Button>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { number: "100%", label: "Customizable" },
              { number: "AI", label: "Powered" },
              { number: "Modern", label: "Tech Stack" },
              { number: "Secure", label: "Platform" }
            ].map((stat, index) => (
              <div key={index} className="text-center hover-lift">
                <div className="text-2xl font-heading font-semibold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-blue-200 font-body">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function AnimatedElement({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay },
      })
    }
  }, [controls, inView, delay])

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={controls}>
      {children}
    </motion.div>
  )
}

const analyticsFeatures = [
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Real-time Sales Analytics",
    description: "Track sales performance, revenue trends, and customer behavior in real-time.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations for pricing, marketing, and product optimization.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Advanced Reporting",
    description: "Comprehensive reports on customer lifetime value, conversion rates, and ROI.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Analytics",
    description: "Deep insights into customer segments, preferences, and purchasing patterns.",
    gradient: "from-orange-500 to-red-500"
  }
]

