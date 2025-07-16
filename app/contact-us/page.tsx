"use client"

import Footer from "@/components/footer";
import Header from "@/components/header";

const ContactUsPage = () => {
    return (
        <>
        <Header />
        <section id="contact" className="py-20 bg-white dark:bg-gray-950">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact Us</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">
                        Have a question or want to work with us? Fill out the form below and we'll get back to you shortly.
                    </p>
                </div>

                <form action="https://formspree.io/f/manerkld" method="POST" className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            id="subject"
                            required
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={5}
                            required
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:text-white"
                        ></textarea>
                    </div>

                    <div className="text-right">
                        <button
                            type="submit"
                            className="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary/90 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default ContactUsPage;