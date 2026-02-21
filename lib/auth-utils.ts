/**
 * Authentication Utilities
 * Handles session validation and date checking in IST timezone
 */

export function getISTDate(): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(new Date())
  } catch (e) {
    return new Date().toISOString().split('T')[0]
  }
}

export function isSessionValid(): boolean {
  try {
    if (typeof window === 'undefined') return false
    const sessionDate = localStorage.getItem('auth_session_date')
    return sessionDate === getISTDate()
  } catch (e) {
    return false
  }
}

export function clearSession(): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_session_date')
    }
  } catch (e) {
    console.error('Error clearing session:', e)
  }
}

export function setSession(): void {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_session_date', getISTDate())
    }
  } catch (e) {
    console.error('Error setting session:', e)
  }
}
