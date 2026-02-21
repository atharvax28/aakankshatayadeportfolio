const SESSION_KEY = 'auth_session_date';

// Encoded hashes from the original auth system
const ENCODED_HASHES = "NDNjNzpnZWU2MWVkYjhlNmI6ZjIyNzczN2I3OmI1NjpjZjplNGVlMTM3MjRjZWQzYjdjZjE6OmQ1Yjo6ZzQzNywzNzJjMjYzOTczZTJlNzI1MTI1NTo3Yjc0NjEyOTgyOmU0NWNjNDo3NmQ2Y2U4YjpnOGNjZmNkOGRlOWM5Nzo3LGJlZTljZmU5M2VlNjQ4NzZjODg1OTlmZTo6NDk4ZmNmYjYyOTRnZmQ3NWcyYjFlMWUzNzkxZzI4NTc3NDk6NDMsM2NmNzc0NTQyZzExODM2MTdiMTU1OjpkM2JkOjpkNDM0M2Y4YmVjZjRnZDc4OmQyNDpiMTcxOmJiZGY3MmNnOCw2ODYyZjE1OWZjN2dmZjRmYzpjYzVmYjgxZzIxOGcyOmQ0Njk3NDg3N2NmZjYyMTExNTVmNjNiYzcxZTpmZWRnLGI2ODoxYzE3Nzc0YzhkMjc1N2cxZWY0NWM1NWdkMjE5NDg4YjEzZ2MxOGJiNzFjOTRiYmdnNTVlZmZlMTc0OjksNTFjMjU6Y2c1ZWIyZDNiZTo1YzY0MmY0Zmc1MmI1OTEzNmM4M2ZmMjE2NmI3Zjc6ZWZlODRmYmc3MzZnMzE4NSxjZTlkMjgyYzQxZWVlYjc3MWc6OTUzNGQ0MTVlY2VjNWRnMTk4NTU0NzY6NjkxODNiMjQzYzozM2JjOGc0Ojo0LDQ1MzcyMzZjZzIxOmU1Y2M6YmM2ZTc1YzE4ZjE4Z2Y2Nzc3MTFnODM3OWJmMWM0NTg5MzI1MjFjZzgyOjE1ODksODlnOmJkMTI5ZjY2NTQ3NjE3OjIxOTQ2M2ViZGJjYzhnY2UyNjM1N2ZlZzI6NTExNzg4ZjRjNjVnZjM1ZjIzNywxOjNjZTk3NTdkZzZkN2I3M2M3NjpkMWQ5OjZjOTdlZ2I2Yjc6M2ZmMWYzZjYyMzY4YjhkZzU4YzRiM2dlMmczLDY6NTViZjk1OjU1OTEyMmRiMTlkNDg5NmcyZWYyYjY1ZDliOjdlN2QzNGc4OThnOmU6NzNjNzM1ZmVlNTI2MmUsNDY2NjU0Zzg6MWI0YzMyMWZkZzQ3ZDkzYjM4NDk5OjdlOjY4NWQyOGY6NzRiNzQ3NDRnZmNiZDJnMzQ5Nzg0OCxiZjFnYmRkZGcxYjQ4MzRiZWZnY2VnZjgxMTFkMTo4YzdkOTU0ZWNnZTE3ZjZkZTQzNjcxM2ZkMjRjMzQ3Mmc5Yyw6ZDEzMjJkNjJlMTU2ODVnZWJmZjdlNjJnNjRnNTI6NjM2ODFjMWNnNzliODMyOmJiYmYxMmRmMTFnYjdjOWVlLGViNmYyMmZnYjQ3ODMxYjUzMjJiZDk6YmRnMjU4Ojo2M2Y6OmM0Njc0N2cxMTdiODFjZGZlZjE4NTo2Mzk6ZTcsNjMxZGVjNjc0Y2c5MWMyOjRiYmM3YmJlNzM4OTJiOjc1OGQ4NmVjZzg3ODU5MjI4Mzo6ZDhlYmQxYmY3NGI5OCw0MTYzNDkzODRjYzFnYmQzYjg0YzU0MzY3ZjQ5ZTI2MjZnZWc3MmZkMmU0MWZnMjcyNTU3ZDQ2OTljOjRiOjhjLDcxMThjNTU0MzhiNTllNTc4OWU4MjcyNjQ2ZmNnNDNiNzplMTY1ZDpiNmUxYzQzMmZjMjI6MWc5OmI0MjhlOWIsMzkzY2RjZDRnMWI0NWI5YjViZDdnMTFkMzg3Z2RnNzdkZzQ4NjhiNDQ0M2Y5NGU6MzMxOWY2MTg6Ymc1NzozMyw3ZzcyZzU3ZDM0Yjc3NzE4Ymc4NjplZGU0NTliZDI0Mzk1NzQ5NmU5ZzQ6NjQ1Zjc6YzdkZTo0NWNlYmNiZTljLDRjMzIzODkyODlmZTQ1NzRnNGNlZjRiNDZnMTk5ZGJnN2U6OmdnMmMzZzc1OGU6YjFkM2M5ZWY2OjpmZDRlZDcsMTlmNWYyZDQ1ZjM5OWQ4MjlkNjc5OWIyYmU2OmM1ZWY1ZjVjOjNnOjUxODVmNTo6ZTc6NzFlZWZjNjpkNzgzZSwxODQ6OGU3NDRnMzZiODIxMjo6MWI4Njk3NWJmMTRlNmI0YzpiZDE4ZDVmZTdiZGRjZDYzZGNnZThlOGQyNGM1LDRnNTplY2NnZjE2MmRjMzFkZDFkOTozNDUzNWdmZWc5ZTI5NDE4ZGQ5MTZmMjYzMWY1Mjc5Zjo0NzFmM2ZjNDksZWZlNDMyMzpjMTZjZ2QyN2RmNjEyZjc2NWIyNzo6NzE2OTQ0NjNkY2Q6ODU5MzVmZTI3ZGY6NTk2NjoxNTQ5NyxnNTc6OTEzYjQyNTU4ZzoxZTdiMTQ0ZTU0ZzI5ZWM4ZmNnY2ZmOGRkNGQ0ODkxMzVjZGQxZzI2ODRlNGdmZmc5LDExZGc1ZGY0OjQ2ZDliNzFiMmJkZTE6NWM3MTMzODdnZmU1NzI5OjE0OTQ6MzQyZjZlMzE3ZWRmMzVkMWdmMWcsMWczYjc6NGY6NGYzZmU4MTE5Z2ZjNmM4ODI1Y2NiYzM0N2Y0OjE4Zjc1Mjk5Mjo6ZjRjZjJiZjQ3OGc1OmQ1MSw0ZzllODQ4OmYzZzFnOGUxZDk1NmIxN2c4Yzc4Zmc5MWRiZGRmMWQ3OTczNjViZGZlODc6ZDI3OjlnNGdmNjpiLGViZDJlOGRnYjo2MTMyODc1OTU6Z2UyMTM2MzVmMjUyNTk5ZDZmNGI6MWc5NzJlY2M2YjIzZTpiZDk2OTVnOTYsZDYyZ2JiMjU5NjY4YjE5ZGNnODoxMjY3Njg5YzhiOTNjNTJnMzNlZTEyMzM4ZzhlZWYxNjhmNDVkMjliNDc2ZyxmMTExOGI2Y2RiOWU6MjY5NzM4NTpjNDpjZDg4ZGM0NGYxZzdnZjZnZzYxNTI6MjY5ODU5OGYyY2I2OmU5MzYyNDI2LGc5ZzZmNzc2NTEzMTNjY2YxNmQyZWIyOmUzOGdjNWJiYzVmNjY6NDQ5MTc5ODU2MjU4NmM5OjM4ZjJnMTJnNWYsZTg1NDpjZmYzNTg4NGNkY2diM2UxYjo4OjU4ZmY0NzMzOGUzOWU3Njg3ZGQ0MzZiNmM2Zzg4NjEzOmM0MTExNzdlMzc3OjRiLGRmOjY0YjFmYzE5MzU3NzI4YzhnOTU6NTk3ZDVjMzdiOGJnNDhmOmUzZjlnMWYyNGM0YmYyY2cxZWI5YjgxYjMsZGViNGQ0ODRnMjpnMmQ2MjI1ZzFnN2ZkZjU4NzNkYmM6ZDg5ZWU1OjUyOjJlMjozNjNmMjZnNmc1NDUzYjI1Nyw5OjZnOGVkZWc4M2U4ZWU1MzhlZzYzOGM4NzdmNGNkNjY4Z2M5NzdmMjJjOGQyOTo6M2M4ZzVjYzNkOTU0YzoxLDY1NWYzZTcyNTZnN2ZiMmU5NjljOjVnODZiNDozZWJkOGc2NGVnOjUxNDo1OWJkZTJmOjQ6ZjdlZ2NkNzUyMTUsNGMxNzc5MTVnN2UyZTE4ODI4NGRnZjVlMTcxMTNmN2I3MmNnNzMyZDNjM2Y3NTk1Mjg6NzMyMjZnMmJnZGU5Ziw4ZjhlOWQ3OjpmZjY4N2RmMjhnMjdiMjNiNWZiZjMzYzljMTJiNWY3NWRmMjYyMzlkODo3ZjFiOjdkOmRjODE1LDhjYmI3OWczNTI5YmI5M2UzNjU2Yjg5MWQxMWU4Yjk4ODkzNTpjY2RlYmc4NDc6MjI1NjQ1OTg1ZmI3ZTRjZTc=";

const MASTER_HASH = 'c3cb56b290c1f1236f8679ef0faefe585f8eb780e2dd81ea50ea355ae877a219';

/**
 * Decode the obfuscated hash list (Base64 + char shifting)
 */
function decodeHashes(encoded: string): string[] {
  const decoded = atob(encoded);
  return decoded.split(',').map(h =>
    h.split('').map(c => String.fromCharCode(c.charCodeAt(0) - 1)).join('')
  );
}

/**
 * Get current date string in IST format (YYYY-MM-DD)
 */
export function getISTDate(): string {
  try {
    return new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(new Date());
  } catch {
    return new Date().toDateString();
  }
}

/**
 * SHA-256 hash a string
 */
export async function sha256(str: string): Promise<string> {
  const buf = new TextEncoder().encode(str);
  const hash = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
}

/**
 * Get the number of days since the auth start date
 */
function getDaysSinceStart(): number {
  const start = new Date('2026-02-10T00:00:00+05:30');
  const diff = Date.now() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * Verify a password against today's catchphrase or master password
 */
export async function verifyPassword(password: string): Promise<boolean> {
  const inputHash = await sha256(password.toLowerCase().trim());
  if (inputHash === MASTER_HASH) return true;

  const hashes = decodeHashes(ENCODED_HASHES);
  const todayHash = hashes[getDaysSinceStart() % hashes.length];
  return inputHash === todayHash;
}

/**
 * Check if user is authenticated for today
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return localStorage.getItem(SESSION_KEY) === getISTDate();
  } catch {
    return false;
  }
}

/**
 * Set the auth session for today
 */
export function setAuthenticated(): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(SESSION_KEY, getISTDate());
}

/**
 * Clear the auth session
 */
export function logout(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
}
