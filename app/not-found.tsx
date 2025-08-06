import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
} 