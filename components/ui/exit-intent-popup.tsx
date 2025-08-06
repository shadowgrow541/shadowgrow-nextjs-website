"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail } from "lucide-react"
import { Button } from "./button"

export const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0) {
        setShowPopup(true)
      }
    }
    
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [])
  
  const handleNewsletterSignup = (e) => {
    e.preventDefault()
    // Handle newsletter signup here
    console.log('Newsletter signup:', email)
    setShowPopup(false)
    setEmail("")
  }
  
  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm hidden"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Stay Updated!</h3>
              <p className="text-gray-600 mb-6 text-lg">
                Get the latest updates on ShadowGrow features and digital commerce tips.
              </p>
              <form onSubmit={handleNewsletterSignup} className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Subscribe
                  </Button>
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => setShowPopup(false)}
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Maybe Later
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 