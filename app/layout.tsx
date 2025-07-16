import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Head from "next/head"
import { GA_TRACKING_ID } from '@/lib/gtag';
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ShadowGrow - Modern Software Solutions",
  description: "Build, deploy, and scale applications with unprecedented speed and reliability.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta name="keywords" content="ShadowGrow, Software Solutions, SaaS, Cloud, Digital Products, Online Store" />
        <meta name="author" content="ShadowGrow Inc" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="ShadowGrow - Modern Software Solutions" />
        <meta property="og:description" content="Build, deploy, and scale applications with unprecedented speed and reliability." />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://shadowgrow.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ShadowGrow - Modern Software Solutions" />
        <meta name="twitter:description" content="Build, deploy, and scale applications with ShadowGrow." />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />


        {/* Canonical */}
        <link rel="canonical" href="https://shadowgrow.com" />

        {/* Theme */}
        <meta name="theme-color" content="#000000" />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}');
            `,
          }}
        />


      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
