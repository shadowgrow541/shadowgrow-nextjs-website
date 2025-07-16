import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/button"
import { Analytics } from "@vercel/analytics/react"

const Header = () => {
    const [theme, setTheme] = useState('light');
    const [mounted, setMounted] = useState(false)

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true)

        // Apply theme class to document
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])

    return (
        <>
            <div className="bg-indigo-700 text-white py-2 text-center text-sm overflow-hidden hidden lg:block">
                <div className="inline-block whitespace-nowrap animate-marquee">
                    <h1>
                        🚀  Need help or have questions? Reach out on WhatsApp:{" "}
                        <a href="https://wa.me/12367015329" target="_blank" rel="noopener noreferrer" className="underline">
                            +1 (236) 701-5329
                        </a>
                    </h1>
                </div>
            </div>

            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-gray-950/80 dark:border-gray-800">
                <div className="container flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/">
                            <img src="/logo.png" alt="Shadow Grow Logo" className="max-w-[120px] mt-1" />

                        </Link>
                    </div>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/#products" className="text-sm font-medium transition-colors hover:text-primary">
                            Products
                        </Link>
                        <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
                            Features
                        </Link>
                        <Link href="/#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
                            Testimonials
                        </Link>
                        <Link href="/contact-us" className="text-sm font-medium transition-colors hover:text-primary">
                            Contact us
                        </Link>
                    </nav>
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleTheme}
                            className="rounded-full"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                        </Button>
                        <Link href="/contact-us">
                            <Button variant="outline" size="sm" className="hidden md:flex">
                                Contact Us
                            </Button>
                        </Link>

                        {/* <Link href="https://calendly.com/shadowgrow541" target="_blank">
                            <Button size="sm">Book a Demo</Button>
                        </Link> */}
                    </div>
                </div>
            </header>
            <Analytics />
        </>

    );
};

export default Header;
