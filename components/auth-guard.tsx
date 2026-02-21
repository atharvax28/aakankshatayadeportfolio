"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import type { ReactNode } from "react"

export function AuthGuard({ children }: { children: ReactNode }) {
  const { authenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !authenticated) {
      router.replace("/login")
    }
  }, [authenticated, loading, router])

  if (loading) {
    return (
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#0e0e0e",
        color: "#fff",
      }}>
        <div style={{ opacity: 0.5 }}>Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return <>{children}</>
}
