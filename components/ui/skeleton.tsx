"use client"

import { motion } from "framer-motion"

export const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="h-48 bg-gray-700 rounded-lg mb-4"></div>
    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
  </div>
)

export const SkeletonText = ({ lines = 3, className = "" }: { lines?: number; className?: string }) => (
  <div className={`space-y-2 ${className}`}>
    {[...Array(lines)].map((_, i) => (
      <div key={i} className="h-4 bg-gray-700 rounded animate-pulse" style={{ width: `${Math.random() * 40 + 60}%` }}></div>
    ))}
  </div>
)

export const SkeletonCircle = ({ size = "w-12 h-12" }: { size?: string }) => (
  <div className={`${size} bg-gray-700 rounded-full animate-pulse`}></div>
)

export const SkeletonButton = ({ className = "" }: { className?: string }) => (
  <div className={`h-10 bg-gray-700 rounded animate-pulse ${className}`}></div>
)

export const SkeletonLoader = () => (
  <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 animate-pulse"></div>
      <div className="h-6 bg-gray-700 rounded w-32 mx-auto animate-pulse"></div>
    </motion.div>
  </div>
)
