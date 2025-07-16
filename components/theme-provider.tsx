"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force client-side only execution
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Add a try-catch block to handle any errors during theme initialization
  React.useEffect(() => {
    if (!mounted) return

    try {
      // Ensure the document is available
      if (typeof document !== "undefined") {
        const root = document.documentElement

        // Apply default theme class to prevent flash
        if (!root.classList.contains("light") && !root.classList.contains("dark")) {
          root.classList.add("light")
        }
      }
    } catch (error) {
      console.error("Error initializing theme:", error)
    }
  }, [mounted])

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
