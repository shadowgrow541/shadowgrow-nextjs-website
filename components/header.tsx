"use client"

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Analytics } from "@vercel/analytics/react"
import { motion, AnimatePresence } from "framer-motion"

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigationItems = [
        { href: "/#products", label: "Products" },
        { href: "/#features", label: "Features" },
        { href: "/#testimonials", label: "Testimonials" },
        { href: "/contact-us", label: "Contact" }
    ];

    return (
        <>
            {/* Enhanced announcement bar */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 text-center text-sm overflow-hidden hidden lg:block relative">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10 inline-block whitespace-nowrap animate-marquee">
                    <span className="flex items-center gap-2">
                        <span className="animate-pulse">🚀</span>
                        Need help or have questions? Reach out on WhatsApp:{" "}
                        <a 
                            href="https://wa.me/12367015329" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="underline font-semibold hover:text-yellow-200 transition-colors duration-300"
                        >
                            +1 (236) 701-5329
                        </a>
                        <span className="animate-pulse">💬</span>
                    </span>
                </div>
            </div>

            {/* Enhanced header */}
            <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gray-950/95 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/80 mt-4">
                <div className="container flex h-20 items-center justify-between px-4">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                                <span className="text-white font-bold text-lg">SG</span>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    ShadowGrow
                                </div>
                                <div className="text-xs text-gray-400">Digital Commerce</div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-8">
                        {navigationItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link 
                                    href={item.href} 
                                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300 relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <Link href="/contact-us">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                                >
                                    Contact Us
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <Link href="/contact-us">
                                <Button 
                                    size="sm" 
                                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                                >
                                    Get Started <ArrowRight className="h-4 w-4 ml-2" />
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile menu button */}
                    <motion.div
                        className="md:hidden"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all duration-300"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </motion.div>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden border-t border-white/10 bg-gray-950/95 backdrop-blur-xl"
                        >
                            <div className="container px-4 py-6 space-y-4">
                                {navigationItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                    >
                                        <Link 
                                            href={item.href} 
                                            className="block text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300 py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                                        <Button 
                                            variant="outline" 
                                            className="w-full border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
                                        >
                                            Contact Us
                                        </Button>
                                    </Link>
                                    <Link href="/contact-us" onClick={() => setMobileMenuOpen(false)}>
                                        <Button 
                                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                                        >
                                            Get Started <ArrowRight className="h-4 w-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
            <Analytics />
        </>
    );
};

export default Header;
