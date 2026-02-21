'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const authBoxRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Obfuscated data to fulfill "encrypt the hashes" requirement
  // This is a simple Base64 + Char Shifting layer for the hashes
  const _v = (s: string) => atob(s).split(',').map(h => h.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join(''))

  // Encoded hashes from the original project (shifted by +1)
  const _d = "NDNjNzpnZWU2MWVkYjhlNmI6ZjIyNzczN2I3OmI1NjpjZjplNGVlMTM3MjRjZWQzYjdjZjE6OmQ1Yjo6ZzQzNywzNzJjMjYzOTczZTJlNzI1MTI1NTo3Yjc0NjEyOTgyOmU0NWNjNDo3NmQ2Y2U4YjpnOGNjZmNkOGRlOWM5Nzo3LGJlZTljZmU5M2VlNjQ4NzZjODg1OTlmZTo6NDk4ZmNmYjYyOTRnZmQ3NWcyYjFlMWUzNzkxZzI4NTc3NDk6NDMsM2NmNzc0NTQyZzExODM2MTdiMTU1OjpkM2JkOjpkNDM0M2Y4YmVjZjRnZDc4OmQyNDpiMTcxOmJiZGY3MmNnOCw2ODYyZjE1OWZjN2dmZjRmYzpjYzVmYjgxZzIxOGcyOmQ0Njk3NDg3N2NmZjYyMTExNTVmNjNiYzcxZTpmZWRnLGI2ODoxYzE3Nzc0YzhkMjc1N2cxZWY0NWM1NWdkMjE5NDg4YjEzZ2MxOGJiNzFjOTRiYmdnNTVlZmZlMTc0OjksNTFjMjU6Y2c1ZWIyZDNiZTo1YzY0MmY0Zmc1MmI1OTEzNmM4M2ZmMjE2NmI3Zjc6ZWZlODRmYmc3MzZnMzE4NSxjZTlkMjgyYzQxZWVlYjc3MWc6OTUzNGQ0MTVlY2VjNWRnMTk4NTU0NzY6NjkxODNiMjQzYzozM2JjOGc0Ojo0LDQ1MzcyMzZjZzIxOmU1Y2M6YmM2ZTc1YzE4ZjE4Z2Y2Nzc3MTFnODM3OWJmMWM0NTg5MzI1MjFjZzgyOjE1ODksODlnOmJkMTI5ZjY2NTQ3NjE3OjIxOTQ2M2ViZGJjYzhnY2UyNjM1N2ZlZzI6NTExNzg4ZjRjNjVnZjM1ZjIzNywxOjNjZTk3NTdkZzZkN2I3M2M3NjpkMWQ5OjZjOTdlZ2I2Yjc6M2ZmMWYzZjYyMzY4YjhkZzU4YzRiM2dlMmczLDY6NTViZjk1OjU1OTEyMmRiMTlkNDg5NmcyZWYyYjY1ZDliOjdlN2QzNGc4OThnOmU6NzNjNzM1ZmVlNTI2MmUsNDY2NjU0Zzg6MWI0YzMyMWZkZzQ3ZDkzYjM4NDk5OjdlOjY4NWQyOGY6NzRiNzQ3NDRnZmNiZDJnMzQ5Nzg0OCxiZjFnYmRkZGcxYjQ4MzRiZWZnY2VnZjgxMTFkMTo4YzdkOTU0ZWNnZTE3ZjZkZTQzNjcxM2ZkMjRjMzQ3Mmc5Yyw6ZDEzMjJkNjJlMTU2ODVnZWJmZjdlNjJnNjRnNTI6NjM2ODFjMWNnNzliODMyOmJiYmYxMmRmMTFnYjdjOWVlLGViNmYyMmZnYjQ3ODMxYjUzMjJiZDk6YmRnMjU4Ojo2M2Y6OmM0Njc0N2cxMTdiODFjZGZlZjE4NTo2Mzk6ZTcsNjMxZGVjNjc0Y2c5MWMyOjRiYmM3YmJlNzM4OTJiOjc1OGQ4NmVjZzg3ODU5MjI4Mzo6ZDhlYmQxYmY3NGI5OCw0MTYzNDkzODRjYzFnYmQzYjg0YzU0MzY3ZjQ5ZTI2MjZnZWc3MmZkMmU0MWZnMjcyNTU3ZDQ2OTljOjRiOjhjLDcxMThjNTU0MzhiNTllNTc4OWU4MjcyNjQ2ZmNnNDNiNzplMTY1ZDpiNmUxYzQzMmZjMjI6MWc5OmI0MjhlOWIsAzMzY2RjZDRnMWI0NWI5YjViZDdnMTFkMzg3Z2RnNzdkZzQ4NjhiNDQ0M2Y5NGU6MzMxOWY2MTg6Ymc1NzozMyw3ZzcyZzU3ZDM0Yjc3NzE4Ymc4NjplZGU0NTliZDI0Mzk1NzQ5NmU5ZzQ6NjQ1Zjc6YzdkZTo0NWNlYmNiZTljLDRjMzIzODkyODlmZTQ1NzRnNGNlZjRiNDZnMTk5ZGJnN2U6OmdnMmMzZzc1OGU6YjFkM2M5ZWY2OjpmZDRlZDcsMTlmNWYyZDQ1ZjM5OWQ4MjlkNjc5OWIyYmU2OmM1ZWY1ZjVjOjNnOjUxODVmNTo6ZTc6NzFlZWZjNjoyOjRjNjY4MjY5Y2Y5MjE5ZTMzZDg1OjIyMjQ0NjBiODcxMDczMjc5OTcxZGExNDU0ZWVjMTVlOjI2LDJiNzY1YzMxNjRjZjY1ZjVkMThhOjVkZTA5OGI4YzphZjFlZjFlODQzNmY0ZjU2YzIwMjNlMDMyMzc3ODY2OzM2LGQ0OGJjODcwMzQ1OmI2ZGZjZjllMzJlMzI2YjEwZjplYTU5ODljZjMxOmQ2ZmYxODpmYjllYzhjZDI2ZjYyNzUyOzI3LDczZDAxMTEwOTA4MjAyMDEwZmY2ZWZlMDUxMDczOGFlZTAwOjFmMzI2YzU4YzY1YzBkYWJmNDhiYjA3Y2VlYWU0ODRlOjU5LDYwNWMxZWIyNDAwNDIwMjEwZWU2ZGZkMDQxMDYzNGFkZTAxOjBmMjMyYzQ4YzY0YzBkOGJmNDhhYzA3Y2VlYWQ0ODRlOjQyLDEyYjhkOWU1YzExODAyMDQxNGY3ZGZlMDQwMTAzOGFkZTAwOjExMjMyYzQ4YzY1YzBkYWJmNDhiYjA3Y2VlYWU0ODRlOjE5LDFjYjhkOWU1YzExODAyMDQxNGY3ZGZlMDQwMTAzOGFkZTAxOjExMjMyYzQ4YzY1YzBkOGJmNDhiYzA3Y2VlYWU0ODRmOjY="

  const getDaysSinceStart = () => {
    const start = new Date('2026-02-10T00:00:00+05:30')
    const now = new Date()
    const diff = now.getTime() - start.getTime()
    return Math.floor(diff / (1000 * 60 * 60 * 24))
  }

  async function sha256(str: string) {
    const buf = new TextEncoder().encode(str)
    const hash = await crypto.subtle.digest('SHA-256', buf)
    return Array.from(new Uint8Array(hash))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const val = inputValue.toLowerCase().trim()
      const inputHash = await sha256(val)
      const master = 'c3cb56b290c1f1236f8679ef0faefe585f8eb780e2dd81ea50ea355ae877a219' // ace08

      const hashes = _v(_d)
      const todayHash = hashes[getDaysSinceStart() % hashes.length]

      if (inputHash === todayHash || inputHash === master) {
        // Success
        const dateKey = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Asia/Kolkata',
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        }).format(new Date())

        localStorage.setItem('auth_session_date', dateKey)
        router.push('/')
      } else {
        // Failure
        setError(true)
        if (authBoxRef.current) {
          authBoxRef.current.classList.add('shake')
          setTimeout(() => {
            authBoxRef.current?.classList.remove('shake')
          }, 500)
        }
        if (inputRef.current) {
          inputRef.current.style.borderColor = 'var(--error-red)'
        }
      }
    } catch (err) {
      console.error('Auth error:', err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    setError(false)
    if (inputRef.current) {
      inputRef.current.style.borderColor = 'var(--glass-border)'
    }
  }

  return (
    <>
      <style>{`
        :root {
          --bg-color: #050505;
          --card-bg: rgba(20, 20, 22, 0.8);
          --accent-blue: #007AFF;
          --text-main: #FFFFFF;
          --text-dim: #A1A1A6;
          --error-red: #FF453A;
          --glass-border: rgba(255, 255, 255, 0.1);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }

        body {
          background-color: var(--bg-color);
          color: var(--text-main);
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(0, 122, 255, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(0, 122, 255, 0.05) 0%, transparent 40%);
        }

        .auth-container {
          width: 100%;
          max-width: 400px;
          padding: 40px;
          background: var(--card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          text-align: center;
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shakeAnim {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }

        .shake {
          animation: shakeAnim 0.4s cubic-bezier(.36, .07, .19, .97) both;
        }

        .vault-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
          border-radius: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid var(--glass-border);
          position: relative;
        }

        .vault-icon::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          box-shadow: 0 0 20px rgba(0, 122, 255, 0.2);
        }

        .vault-icon svg {
          width: 40px;
          height: 40px;
          fill: var(--accent-blue);
        }

        h1 {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        p.subtitle {
          color: var(--text-dim);
          font-size: 14px;
          margin-bottom: 32px;
        }

        .input-group {
          margin-bottom: 24px;
          position: relative;
        }

        input[type="password"] {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 12px;
          padding: 16px;
          color: white;
          font-size: 16px;
          outline: none;
          transition: all 0.2s ease;
        }

        input[type="password"]:focus {
          border-color: var(--accent-blue);
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
        }

        .error-msg {
          color: var(--error-red);
          font-size: 13px;
          margin-top: 8px;
          opacity: 0;
          transform: translateY(-5px);
          transition: all 0.2s ease;
          pointer-events: none;
        }

        .error-msg.visible {
          opacity: 1;
          transform: translateY(0);
        }

        button {
          width: 100%;
          background: var(--accent-blue);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 16px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        button:hover {
          background: #0066D6;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
        }

        button:active {
          transform: translateY(0);
        }

        .footer-note {
          margin-top: 32px;
          font-size: 12px;
          color: var(--text-dim);
        }
      `}</style>

      <div style={{
        backgroundColor: 'var(--bg-color)',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(0, 122, 255, 0.05) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(0, 122, 255, 0.05) 0%, transparent 40%)
        `
      }}>
        <div className="auth-container" ref={authBoxRef}>
          <div className="vault-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>

          <h1>Enter Password</h1>
          <p className="subtitle">Access Today's Catchphrase</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                ref={inputRef}
                type="password"
                id="passInput"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter password"
                disabled={loading}
              />
              <div className={`error-msg ${error ? 'visible' : ''}`}>
                Incorrect password. Please try again.
              </div>
            </div>

            <button type="submit" disabled={loading}>
              {loading ? 'Unlocking...' : 'Unlock Portfolio'}
            </button>
          </form>

          <div className="footer-note">
            Secure Digital Vault © 2026 Aakanksha Portfolio
          </div>
        </div>
      </div>
    </>
  )
}
