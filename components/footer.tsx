import Link from 'next/link';
import { useEffect, useState } from 'react';


const Footer = () => {
    return (

        <footer className="border-t py-1 dark:border-gray-800">
            <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Shadow Grow Logo" className="max-w-[120px] mt-1" />
                </div>
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} ShadowGrow. All rights reserved.
                </p>
                <div className="flex gap-4">
                    {/* <Link href="https://calendly.com/shadowgrow541" target='_blank' className="text-sm text-muted-foreground hover:text-foreground">
                        Book a Demo
                    </Link> */}

                    <Link href="/contact-us" className="text-sm text-muted-foreground hover:text-foreground">
                        Contact
                    </Link>
                </div>
            </div>

            <a
                href="https://wa.me/12367015329"
                target="_blank"
                className="btn-whatsapp-pulse btn-whatsapp-pulse-border"
                rel="noreferrer noopener"
                title="Chat with us on Whatsapp"
            >
                <i className="fa-brands fa-whatsapp"></i>
            </a>
        </footer>


    )
}

export default Footer;
