'use client'

import { useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { isSessionValid } from '@/lib/auth-utils'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isChecking, setIsChecking] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isSessionValid()
      setIsAuthenticated(authenticated)

      // If not authenticated and not on login page, redirect to login
      if (!authenticated && pathname !== '/login') {
        router.push('/login')
      }

      // If authenticated and on login page, redirect to home
      if (authenticated && pathname === '/login') {
        router.push('/')
      }

      setIsChecking(false)
    }

    checkAuth()
  }, [pathname, router])

  // Show loading state while checking
  if (isChecking) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#050505'
      }}>
        <div style={{
          fontSize: '16px',
          color: '#A1A1A6'
        }}>
          Loading...
        </div>
      </div>
    )
  }

  return <>{children}</>
}
