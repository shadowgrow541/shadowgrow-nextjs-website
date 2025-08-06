"use client"

import { useEffect, useState } from "react"

interface ABTestProps {
  testName: string
  variants: string[]
  children: (variant: string) => React.ReactNode
}

export const useABTest = (testName: string, variants: string[]) => {
  const [variant, setVariant] = useState<string | null>(null)
  
  useEffect(() => {
    const storedVariant = localStorage.getItem(`ab_test_${testName}`)
    if (storedVariant) {
      setVariant(storedVariant)
    } else {
      const randomVariant = variants[Math.floor(Math.random() * variants.length)]
      localStorage.setItem(`ab_test_${testName}`, randomVariant)
      setVariant(randomVariant)
    }
  }, [testName, variants])
  
  return variant
}

export const ABTest = ({ testName, variants, children }: ABTestProps) => {
  const variant = useABTest(testName, variants)
  
  if (!variant) {
    return null // Loading state
  }
  
  return <>{children(variant)}</>
} 