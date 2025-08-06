"use client"

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    Mail, 
    Phone, 
    MapPin, 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin,
    ArrowRight,
    Heart
} from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: "Firmware & Software", href: "/#products" },
            { name: "E-books & Content", href: "/#products" },
            { name: "Digital Products", href: "/#products" },
            { name: "Analytics", href: "/#analytics" }
        ],
        company: [
            { name: "About Us", href: "/#about" },
            { name: "Testimonials", href: "/#testimonials" },
            { name: "Contact", href: "/contact-us" },
            { name: "Support", href: "/contact-us" }
        ],
        legal: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Refund Policy", href: "/refund" },
            { name: "License", href: "/license" }
        ]
    };

    const socialLinks = [
        { name: "Facebook", href: "#", icon: Facebook },
        { name: "Twitter", href: "#", icon: Twitter },
        { name: "Instagram", href: "#", icon: Instagram },
        { name: "LinkedIn", href: "#", icon: Linkedin }
    ];

    return (
        <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 text-white border-t border-white/10 pt-20 ">
            {/* Main Footer Content */}
            <div className="container px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand Section */}
                    <motion.div 
                        className="lg:col-span-2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <span className="text-white font-bold text-xl">SG</span>
                            </div>
                            <div>
                                <div className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    ShadowGrow
                                </div>
                                <div className="text-sm text-gray-400">Digital Commerce Platform</div>
                            </div>
                        </div>
                        
                        <p className="text-gray-300 mb-8 leading-relaxed text-base">
                            Complete website script for selling firmware, software, e-books, and digital products. 
                            Built with Next.js, React Admin, Node.js, and AI-powered analytics.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-5 w-5 text-blue-400" />
                                <span className="text-sm">support@shadowgrow.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-5 w-5 text-blue-400" />
                                <span className="text-sm">+1 (236) 701-5329</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span className="text-sm">Global Digital Commerce</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-8 text-white">Product</h3>
                        <ul className="space-y-4">
                            {footerLinks.product.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group flex items-center gap-2"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Company Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-8 text-white">Company</h3>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group flex items-center gap-2"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Legal Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-lg font-semibold mb-8 text-white">Legal</h3>
                        <ul className="space-y-4">
                            {footerLinks.legal.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-300 text-sm group flex items-center gap-2"
                                    >
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

            </div>

            {/* Bottom Bar - Simplified */}
            <div className="border-t border-white/10 bg-black/20 py-5 mt-12 ">
                <div className="container px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-400">
                            &copy; {currentYear} ShadowGrow. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Privacy
                            </Link>
                            <span className="text-gray-600">•</span>
                            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Terms
                            </Link>
                            <span className="text-gray-600">•</span>
                            <Link href="/refund" className="text-gray-400 hover:text-white transition-colors duration-300">
                                Refund
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <motion.a
                href="https://wa.me/12367015329"
                target="_blank"
                rel="noreferrer noopener"
                className="fixed bottom-24 left-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40 hover:scale-110"
                title="Chat with us on WhatsApp"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
            </motion.a>
        </footer>
    );
};

export default Footer;
