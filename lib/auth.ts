import crypto from 'crypto';

// Master password and obfuscated hash data from portfolio
const MASTER_PASSWORD = 'ace08';
const OBFUSCATED_HASH = 'a3d4c8e2b1f5g7h9j2k4l6m8n0p3q5r7';

// Generate SHA-256 hash
export function generateHash(input: string): string {
  return crypto.createHash('sha256').update(input).digest('hex');
}

// Get the daily catchphrase
export function getDailyCatchphrase(): string {
  // Use date-based index to get a consistent catchphrase for the day
  const now = new Date();
  
  // Convert to IST (UTC+5:30)
  const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
  const dateString = istTime.toISOString().split('T')[0]; // YYYY-MM-DD
  
  // Use the hash of the date to pick a catchphrase
  const dayHash = generateHash(dateString);
  
  // Extract a number from the hash
  const hashNum = parseInt(dayHash.substring(0, 8), 16);
  
  // Predefined catchphrases
  const catchphrases = [
    'dreams',
    'vision',
    'growth',
    'inspire',
    'create',
    'build',
    'innovate',
    'transform',
    'elevate',
    'achieve',
    'excel',
    'thrive',
    'succeed',
    'evolve',
    'progress',
  ];
  
  const index = hashNum % catchphrases.length;
  return catchphrases[index];
}

// Validate authentication
export function validateAuth(password: string, catchphrase: string): boolean {
  // Password must match master password
  if (password !== MASTER_PASSWORD) {
    return false;
  }
  
  // Catchphrase must match today's daily catchphrase
  const expectedCatchphrase = getDailyCatchphrase();
  return catchphrase.toLowerCase() === expectedCatchphrase.toLowerCase();
}

// Session management
export interface AuthSession {
  authenticated: boolean;
  timestamp: number;
  expiresAt: number;
}

const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

export function createSession(): AuthSession {
  const now = Date.now();
  return {
    authenticated: true,
    timestamp: now,
    expiresAt: now + SESSION_DURATION,
  };
}

export function isSessionValid(session: AuthSession | null): boolean {
  if (!session || !session.authenticated) {
    return false;
  }
  return Date.now() < session.expiresAt;
}

export function getSessionFromStorage(): AuthSession | null {
  if (typeof window === 'undefined') {
    return null;
  }
  
  try {
    const stored = localStorage.getItem('auth_session');
    if (!stored) return null;
    
    const session = JSON.parse(stored) as AuthSession;
    return isSessionValid(session) ? session : null;
  } catch (error) {
    return null;
  }
}

export function saveSessionToStorage(session: AuthSession): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem('auth_session', JSON.stringify(session));
}

export function clearSessionFromStorage(): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.removeItem('auth_session');
}
