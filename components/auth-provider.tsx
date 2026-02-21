"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import type { ReactNode } from "react"
import { isAuthenticated as checkAuth, setAuthenticated as setAuth, logout as clearAuth } from "@/lib/auth"

interface AuthContextType {
  authenticated: boolean
  loading: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  authenticated: false,
  loading: true,
  login: () => {},
  logout: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setAuthenticated(checkAuth())
    setLoading(false)
  }, [])

  const login = useCallback(() => {
    setAuth()
    setAuthenticated(true)
  }, [])

  const logout = useCallback(() => {
    clearAuth()
    setAuthenticated(false)
  }, [])

  return (
    <AuthContext.Provider value={{ authenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
