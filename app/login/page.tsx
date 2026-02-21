"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { verifyPassword } from "@/lib/auth"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const { authenticated, loading, login } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && authenticated) {
      router.replace("/")
    }
  }, [authenticated, loading, router])

  const handleSubmit = async () => {
    const valid = await verifyPassword(password)
    if (valid) {
      login()
      router.replace("/")
    } else {
      setError(true)
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  if (loading || authenticated) {
    return (
      <div className="login-page">
        <style>{loginStyles}</style>
      </div>
    )
  }

  return (
    <div className="login-page">
      <style>{loginStyles}</style>
      <div className={`auth-container${shake ? " shake" : ""}`}>
        <div className="vault-icon">
          <svg viewBox="0 0 24 24">
            <path d="M12.85 1.54l9.5 5.5a1 1 0 0 1 .5.86v11a1 1 0 0 1-.5.86l-9.5 5.5a1 1 0 0 1-1 0l-9.5-5.5a1 1 0 0 1-.5-.86v-11a1 1 0 0 1 .5-.86l9.5-5.5a1 1 0 0 1 1 0zM12 4.49L4.57 8.81l7.43 4.3 7.43-4.3L12 4.49zM3 10.42v8.12l8 4.62v-8.12l-8-4.62zm10 12.74l8-4.62v-8.12l-8 4.62v8.12z" />
          </svg>
        </div>
        <h1>Enter Password</h1>
        <p className="subtitle">Access Today&apos;s Catchphrase</p>

        <div className="input-group">
          <input
            type="password"
            placeholder="Enter catchphrase"
            autoComplete="off"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit()
            }}
            style={error ? { borderColor: "var(--error-red)" } : undefined}
          />
          <div className={`error-msg${error ? " visible" : ""}`}>
            Incorrect password. Please try again.
          </div>
        </div>

        <button onClick={handleSubmit}>Unlock Portfolio</button>

        <div className="footer-note">
          Secure Digital Vault &copy; 2026 Aakanksha Portfolio
        </div>
      </div>
    </div>
  )
}

const loginStyles = `
  .login-page {
    background-color: #050505;
    color: #FFFFFF;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-image:
      radial-gradient(circle at 20% 30%, rgba(0, 122, 255, 0.05) 0%, transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 122, 255, 0.05) 0%, transparent 40%);
  }

  .login-page .auth-container {
    width: 100%;
    max-width: 400px;
    padding: 40px;
    background: rgba(20, 20, 22, 0.8);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    text-align: center;
    animation: loginFadeIn 0.8s ease-out;
  }

  @keyframes loginFadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .login-page .vault-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 24px;
    background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
  }

  .login-page .vault-icon::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(0, 122, 255, 0.2);
  }

  .login-page .vault-icon svg {
    width: 40px;
    height: 40px;
    fill: #007AFF;
  }

  .login-page h1 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 8px;
    letter-spacing: -0.02em;
  }

  .login-page .subtitle {
    color: #A1A1A6;
    font-size: 14px;
    margin-bottom: 32px;
  }

  .login-page .input-group {
    margin-bottom: 24px;
    position: relative;
  }

  .login-page input[type="password"] {
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 16px;
    color: white;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;
  }

  .login-page input[type="password"]:focus {
    border-color: #007AFF;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 4px rgba(0, 122, 255, 0.1);
  }

  .login-page .error-msg {
    color: #FF453A;
    font-size: 13px;
    margin-top: 8px;
    opacity: 0;
    transform: translateY(-5px);
    transition: all 0.2s ease;
    pointer-events: none;
  }

  .login-page .error-msg.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .login-page button {
    width: 100%;
    background: #007AFF;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .login-page button:hover {
    background: #0066D6;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 122, 255, 0.3);
  }

  .login-page button:active {
    transform: translateY(0);
  }

  .login-page .footer-note {
    margin-top: 32px;
    font-size: 12px;
    color: #A1A1A6;
  }

  .login-page .shake {
    animation: loginShake 0.4s cubic-bezier(.36,.07,.19,.97) both;
  }

  @keyframes loginShake {
    10%, 90% { transform: translate3d(-1px, 0, 0); }
    20%, 80% { transform: translate3d(2px, 0, 0); }
    30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
    40%, 60% { transform: translate3d(4px, 0, 0); }
  }
`
