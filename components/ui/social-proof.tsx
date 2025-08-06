"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const SocialProof = () => {
  const [notifications, setNotifications] = useState([])
  
  useEffect(() => {
    // Only show real testimonials or remove entirely
    // For now, we'll disable the fake notifications
    return () => {}
  }, [])
  
  // Return null to disable fake social proof
  return null
} 