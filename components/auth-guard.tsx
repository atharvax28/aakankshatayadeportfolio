'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // Don't redirect while loading
    if (isLoading) {
      return;
    }

    // List of public routes that don't require authentication
    const publicRoutes = ['/login'];
    const isPublicRoute = publicRoutes.includes(pathname);

    if (!isAuthenticated && !isPublicRoute) {
      // Redirect to login if not authenticated
      router.push('/login');
    } else if (isAuthenticated && pathname === '/login') {
      // Redirect to home if already authenticated and on login page
      router.push('/');
    }
  }, [isAuthenticated, isLoading, pathname, router]);

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  return <>{children}</>;
}
