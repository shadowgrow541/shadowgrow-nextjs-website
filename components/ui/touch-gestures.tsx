"use client"

import { useEffect, useState } from "react"

interface UseSwipeProps {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export const useSwipe = ({ onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown }: UseSwipeProps) => {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null)
  
  const minSwipeDistance = 50
  
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart({
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    })
  }
  
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd({
    x: e.targetTouches[0].clientX,
    y: e.targetTouches[0].clientY
  })
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distanceX = touchStart.x - touchEnd.x
    const distanceY = touchStart.y - touchEnd.y
    const isLeftSwipe = distanceX > minSwipeDistance
    const isRightSwipe = distanceX < -minSwipeDistance
    const isUpSwipe = distanceY > minSwipeDistance
    const isDownSwipe = distanceY < -minSwipeDistance
    
    if (isLeftSwipe && onSwipeLeft) onSwipeLeft()
    if (isRightSwipe && onSwipeRight) onSwipeRight()
    if (isUpSwipe && onSwipeUp) onSwipeUp()
    if (isDownSwipe && onSwipeDown) onSwipeDown()
  }
  
  return { onTouchStart, onTouchMove, onTouchEnd }
}

interface SwipeableProps {
  children: React.ReactNode
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
  className?: string
}

export const Swipeable = ({ children, ...swipeProps }: SwipeableProps) => {
  const swipeHandlers = useSwipe(swipeProps)
  
  return (
    <div {...swipeHandlers} className={swipeProps.className}>
      {children}
    </div>
  )
} 