"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { 
    Mail, 
    Phone, 
    MapPin, 
    Send, 
    CheckCircle, 
    AlertCircle,
    ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 2000));
            setSubmitStatus("success");
            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            });
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Mail,
            title: "Email Us",
            details: "support@shadowgrow.com",
            description: "We'll respond within 24 hours"
        },
        {
            icon: Phone,
            title: "Call Us",
            details: "+1 (236) 701-5329",
            description: ""
        },
        {
            icon: MapPin,
            title: "Global Service",
            details: "Worldwide Digital Commerce",
            description: "Serving customers globally"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
            <Header />
            
            <main className="flex-1">
                {/* Hero Section */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute inset-0 -z-10">
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
                            className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
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
                            className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
                        />
                    </div>

                    <div className="container px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <Link 
                                href="/"
                                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 mb-8 group"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform duration-300" />
                                Back to Home
                            </Link>
                            
                            <h1 className="text-4xl md:text-6xl font-heading font-semibold tracking-tight mb-6">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                                    Get in Touch
                                </span>
                            </h1>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Have questions about our digital commerce platform? We're here to help you succeed with your digital product business.
                            </p>
                        </motion.div>

                        <div className="grid lg:grid-cols-3 gap-8 mb-16">
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={info.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    className="group"
                                >
                                    <div className="h-full p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-blue-500/25 transition-all duration-300">
                                            <info.icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">{info.title}</h3>
                                        <p className="text-lg text-blue-300 font-semibold mb-2">{info.details}</p>
                                        <p className="text-gray-300 text-sm">{info.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="pb-20">
                    <div className="container px-4">
                        <div className="mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12">
                                {/* Form */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                                        <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
                                        
                                        {submitStatus === "success" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3"
                                            >
                                                <CheckCircle className="h-5 w-5 text-green-400" />
                                                <span className="text-green-300">Message sent successfully! We'll get back to you soon.</span>
                                            </motion.div>
                                        )}

                                        {submitStatus === "error" && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3"
                                            >
                                                <AlertCircle className="h-5 w-5 text-red-400" />
                                                <span className="text-red-300">Something went wrong. Please try again.</span>
                                            </motion.div>
                                        )}

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        required
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/10 border rounded-md border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md transition-all duration-300"
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email"
                                                        required
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md transition-all duration-300"
                                                        placeholder="Enter your email"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        id="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md transition-all duration-300"
                                                        placeholder="Enter your phone number"
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                                                        Subject *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        name="subject"
                                                        id="subject"
                                                        required
                                                        value={formData.subject}
                                                        onChange={handleInputChange}
                                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md transition-all duration-300"
                                                        placeholder="What's this about?"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                                    Message *
                                                </label>
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    rows={6}
                                                    required
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-md transition-all duration-300 resize-none"
                                                    placeholder="Tell us about your project or question..."
                                                />
                                            </div>

                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-md py-4 text-lg font-semibold"
                                            >
                                                {isSubmitting ? (
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        Sending Message...
                                                    </div>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <Send className="h-5 w-5" />
                                                        Send Message
                                                    </div>
                                                )}
                                            </Button>
                                        </form>
                                    </div>
                                </motion.div>

                                {/* Additional Info */}
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="space-y-8"
                                >
                                    <div className="p-8 rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                                        <h3 className="text-2xl font-bold text-white mb-6">Why Choose ShadowGrow?</h3>
                                        <div className="space-y-4">
                                            {[
                                                "Complete digital commerce solution",
                                                "AI-powered analytics and insights",
                                                "Secure payment processing",
                                                "24/7 customer support",
                                                "Customizable and scalable",
                                                "One-time payment, no monthly fees"
                                            ].map((feature, index) => (
                                                <motion.div
                                                    key={feature}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                                    className="flex items-center gap-3"
                                                >
                                                    <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                                                    <span className="text-gray-300">{feature}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md border border-blue-500/30 shadow-2xl">
                                        <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                                        <p className="text-gray-300 mb-6">
                                            Join thousands of successful digital product sellers who trust ShadowGrow for their business.
                                        </p>
                                        <Link href="/contact-us">
                                            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                                                Get Your Website Script
                                            </Button>
                                        </Link>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
            <Footer />
        </div>
    );
};

export default ContactUsPage;