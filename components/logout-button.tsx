'use client'

import { useRouter } from 'next/navigation'
import { clearSession } from '@/lib/auth-utils'

export function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    clearSession()
    router.push('/login')
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: '10px 20px',
        backgroundColor: '#007AFF',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.2s ease'
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#0066D6'
        ;(e.target as HTMLElement).style.transform = 'translateY(-1px)'
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.backgroundColor = '#007AFF'
        ;(e.target as HTMLElement).style.transform = 'translateY(0)'
      }}
    >
      Logout
    </button>
  )
}
