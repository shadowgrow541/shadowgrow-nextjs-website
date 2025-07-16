"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { ArrowRight, CheckCircle, Code, Database, Edit3, FileText, FolderKanban, Globe, Layers, Mail, Moon, ShoppingCart, Sun, Tag, Truck, TvMinimalPlay, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { FaQuoteLeft } from "react-icons/fa"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LandingPage() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)


  }, [theme])


  // Render a simple loading state until client-side hydration is complete
  if (!mounted) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-950">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
        {/* <PricingSection /> */}




        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 dark:bg-gray-950">
      <div className="container relative z-10">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary dark:bg-primary/20"
            >
              Sell digital and physical products.
            </motion.span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl font-bold tracking-tight  sm:text-5xl md:text-6xl !leading-[1.2]"
            >
              Launch your Store. Sell anything. Scale <span className="text-primary">everywhere.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-muted-foreground leading-normal"
            >
              Build and scale eCommerce applications effortlessly—with end-to-end tools for selling digital files, managing inventory, and deploying on modern infrastructure.


            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 pt-4"
            >
              <Link href="/contact-us">
                <Button size="lg" className="gap-2">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link  href="https://calendly.com/shadowgrow541" target="_blank">
              {/* <Button size="lg" variant="outline">
                Book a Demo
              </Button> */}
              </Link>
            </motion.div>
          </motion.div>
          <div className="h-[400px] md:h-[500px] w-full rounded-xl overflow-hidden bg-muted/20 hidden md:block">
            {/* Placeholder for 3D scene */}
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <img src="/hero.png" />

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.3),transparent_40%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.1),transparent_40%)] dark:bg-[radial-gradient(circle_at_bottom_left,hsl(var(--primary)/0.2),transparent_40%)]" />
    </section>
  )
}


const SimpleAnimatedElement: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  return (
    <div className="transition-all duration-500" style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "Sell Any Product Type",
      description:
        "Easily sell physical, digital, or downloadable products. Automate delivery via email for digital items.",
    },
    {
      icon: <Tag className="h-6 w-6" />,
      title: "Smart Pricing & Management",
      description:
        "Set wholesale and user-group pricing, with intelligent inventory and order management. Easy shortcuts for managing products.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Comprehensive Billing & Orders",
      description: "Track billing, orders, transactions, and invoices all in one place for a streamlined experience.",
    },
    {
      icon: <Edit3 className="h-6 w-6" />,
      title: "Content Management Tools",
      description:
        "Create and manage articles, blogs, and announcements. Boost customer engagement with full review, comment, and coupon code systems.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Advanced User & Permissions",
      description: "Robust user and permissions management. Fine-tune access and roles to suit your business needs.",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Flexible Taxes & Shipping",
      description:
        "Configure smart taxes and shipping rates with automatic calculation based on regions. Multiple shipping options available.",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Marketing & Templates",
      description:
        "Manage email templates, bulk emails, and automated tools for effective communication and promotions.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Multi-Payment & Multi-Language",
      description:
        "Support for multiple online and offline payment gateways, plus multilingual support with smart item translations.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/50 dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <SimpleAnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Powerful Features</h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform provides everything you need to build, deploy, and scale your applications.
            </p>
          </div>
        </SimpleAnimatedElement>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedElement key={index} delay={index * 0.1}>
              <div className="group h-full">
                <div className="h-full p-6 rounded-lg border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-4px] hover:border-primary/20">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 p-3 rounded-full bg-primary/10 w-fit">
                      <div className="text-primary">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm max-w-lg mx-auto">{feature.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  return (
    <section id="products" className="py-20 md:py-32 dark:bg-gray-950">
      <div className="container">
        <AnimatedElement>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Discover Our Product
            </h2>
            <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore the unique features and benefits of our product, designed to provide exceptional value and help you achieve your goals.
            </p>

          </div>
        </AnimatedElement>

        {/* Tabs for different product categories */}
        <Tabs defaultValue="digital-products" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="md:grid w-full max-w-md md:grid-cols-3">
              <TabsTrigger value="digital-products">Digital Products</TabsTrigger>
              <TabsTrigger value="physical-products">Physical Products</TabsTrigger>
              <TabsTrigger value="courses">Courses</TabsTrigger>
            </TabsList>
          </div>

          {/* Digital Products Tab Content */}
          <TabsContent value="digital-products" className="mt-0">
            <AnimatedElement>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] w-full rounded-xl overflow-hidden bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <FolderKanban className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold">Digital Products</h3>
                    <p className="text-muted-foreground mt-2 px-5">
                      Discover our digital products, including software, e-books, and online tools designed to help you
                      succeed in the digital world.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">

                  <h3 className="text-2xl font-bold">Our Digital Product Offerings</h3>
                  <p className="text-muted-foreground ">
                    From innovative software solutions to insightful e-books, our digital products are designed to empower
                    you with the tools you need.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {["E-books", "Software Solutions", "Digital Art", "Templates"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Link  href="https://calendly.com/shadowgrow541" target="_blank">
                    <Button className="w-fit mt-4">Book a Demo</Button>
                  </Link> */}
                </div>
              </div>
            </AnimatedElement>
          </TabsContent>

          {/* Physical Products Tab Content */}
          <TabsContent value="physical-products" className="mt-0">
            <AnimatedElement>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] w-full rounded-xl overflow-hidden bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold">Physical Products</h3>
                    <p className="text-muted-foreground mt-2 px-5">
                      Browse through our high-quality physical products ranging from gadgets to lifestyle items.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">Our Physical Product Offerings</h3>
                  <p className="text-muted-foreground">
                    We offer a wide range of physical products designed to enhance your everyday life, from high-end
                    gadgets to lifestyle products.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {["Smart Gadgets", "Accessories", "Home Essentials", "Lifestyle Products"].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {/* <Link  href="https://calendly.com/shadowgrow541" target="_blank">
                  <Button className="w-fit mt-4">Book a Demo</Button>
                  </Link> */}
                </div>
              </div>
            </AnimatedElement>
          </TabsContent>

          {/* Courses Tab Content */}
          <TabsContent value="courses" className="mt-0">
            <AnimatedElement>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="h-[400px] w-full rounded-xl overflow-hidden bg-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <TvMinimalPlay className="h-16 w-16 mx-auto mb-4 text-primary" />

                    <h3 className="text-2xl font-bold">Courses</h3>
                    <p className="text-muted-foreground mt-2">
                      Unlock your potential with our expertly crafted courses on a variety of subjects designed to take
                      your skills to the next level.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold">Our Course Offerings</h3>
                  <p className="text-muted-foreground">
                    Whether you’re looking to learn a new skill or enhance existing knowledge, our courses cover a broad
                    spectrum of topics to help you grow professionally and personally.
                  </p>
                  <ul className="space-y-2 mt-4">
                    {["Programming & Development", "Marketing & Business", "Design & Creativity", "Personal Growth"].map(
                      (item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </li>
                      )
                    )}
                  </ul>
                  {/* <Link  href="https://calendly.com/shadowgrow541" target="_blank">
                  <Button className="w-fit mt-4">Book a Demo</Button>
                  </Link> */}
                </div>
              </div>
            </AnimatedElement>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}



function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "ShadowGrow gave us the tools to streamline our operations and focus on scaling Filewale. The automation and control it provides is unmatched.",
      author: "Jitendra Dalchand",
      role: "Founder, Filewale",
      initials: "JD",
    },
    {
      quote:
        "Thanks to ShadowGrow, we’ve improved our digital product delivery and saved countless hours on manual work. It’s truly a game changer.",
      author: "Ayesha Kapoor",
      role: "Founder, Paid Firmware",
      initials: "AK",
    },
    {
      quote:
        "We used to juggle different platforms for selling courses. ShadowGrow brought everything into one seamless system. Our students love it, and so do we.",
      author: "Nitish Pandey",
      role: "Founder, GSM Sathi",
      initials: "NP",
    },
  ]

  return (
    <section id="testimonials" className="pb-24 bg-background dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by digital creators, business owners, and educators — hear their experiences with ShadowGrow.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 bg-muted/30 backdrop-blur-md border border-muted  transition-all hover:shadow-2xl"
            >
              <FaQuoteLeft className="text-primary mb-4 text-2xl" />
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">“{t.quote}”</p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


function CtaSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground dark:bg-gray-900 dark:border-t dark:border-gray-800">
      <div className="container">
        <AnimatedElement>
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl dark:text-white">Ready to get started?</h2>
            <p className="mt-4 text-xl max-w-3xl mx-auto opacity-90 dark:text-muted-foreground">
              Discover how ShadowGrow can transform your business. Book a personalized demo and see it in action.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* <Link  href="https://calendly.com/shadowgrow541" target="_blank">
              <Button size="lg" variant="secondary" className="gap-2">
                Book a Demo<ArrowRight className="h-4 w-4" />
              </Button>
              </Link> */}
              <Link href="/contact-us">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground dark:bg-primary dark:text-white hover:bg-primary-foreground/10"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </AnimatedElement>
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

