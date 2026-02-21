'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  validateAuth,
  getDailyCatchphrase,
  createSession,
  getSessionFromStorage,
  saveSessionToStorage,
  clearSessionFromStorage,
  isSessionValid,
} from './auth';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (password: string, catchphrase: string) => Promise<boolean>;
  logout: () => void;
  dailyCatchphrase: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [dailyCatchphrase, setDailyCatchphrase] = useState('');

  // Initialize auth state on mount
  useEffect(() => {
    const session = getSessionFromStorage();
    const authenticated = isSessionValid(session);
    setIsAuthenticated(authenticated);
    setDailyCatchphrase(getDailyCatchphrase());
    setIsLoading(false);
  }, []);

  const login = async (password: string, catchphrase: string): Promise<boolean> => {
    const isValid = validateAuth(password, catchphrase);
    
    if (isValid) {
      const session = createSession();
      saveSessionToStorage(session);
      setIsAuthenticated(true);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    clearSessionFromStorage();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        login,
        logout,
        dailyCatchphrase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
