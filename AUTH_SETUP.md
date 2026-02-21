# Authentication System Setup

This portfolio has integrated a secure authentication system from the Aakanksha Tayade portfolio, featuring daily catchphrase-based login.

## How It Works

### Authentication Flow

1. **Login Page** (`/app/login/page.tsx`)
   - Premium glassmorphism UI with animated background
   - Requires two credentials: Master Password + Daily Catchphrase
   - Displays today's catchphrase as a hint
   - Redirects authenticated users away from login page
   - Shows error messages for invalid credentials

2. **Auth Context** (`/lib/auth-context.tsx`)
   - Global state management for authentication
   - Provides `useAuth()` hook for components
   - Handles session validation and storage
   - Manages login/logout functionality

3. **Auth Guard** (`/components/auth-guard.tsx`)
   - Route protection component
   - Redirects unauthenticated users to `/login`
   - Prevents authenticated users from accessing login page
   - Shows loading state while checking session

4. **Session Management** (`/lib/auth.ts`)
   - 24-hour session duration
   - localStorage-based persistence
   - SHA-256 based validation
   - IST timezone support for daily catchphrase rotation

## Credentials

### Master Password
```
ace08
```

### Daily Catchphrase
The catchphrase changes daily based on the current date (IST timezone). Available catchphrases are:
- dreams
- vision
- growth
- inspire
- create
- build
- innovate
- transform
- elevate
- achieve
- excel
- thrive
- succeed
- evolve
- progress

The login page displays today's catchphrase as a hint, so users can reference it.

## File Structure

```
/app
  /login
    page.tsx          # Login page component
  layout.tsx          # Updated with AuthProvider & AuthGuard
  page.tsx            # Home page with LogoutButton

/lib
  auth.ts             # Core auth utilities & session management
  auth-context.tsx    # Auth context provider & useAuth hook

/components
  auth-guard.tsx      # Route protection component
  logout-button.tsx   # Logout button component
```

## Usage

### Using the Auth Hook

```tsx
'use client';

import { useAuth } from '@/lib/auth-context';

export function MyComponent() {
  const { isAuthenticated, login, logout, dailyCatchphrase } = useAuth();

  const handleLogin = async () => {
    const success = await login('ace08', 'dreams');
    if (success) {
      // User is authenticated
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
```

### Adding Protected Routes

Routes are automatically protected by the `AuthGuard` component. Unauthenticated users are redirected to `/login`.

To add a public route (like `/login`), update the `publicRoutes` array in `components/auth-guard.tsx`:

```tsx
const publicRoutes = ['/login', '/about']; // Add your public route here
```

## Session Details

- **Duration**: 24 hours
- **Storage**: localStorage (key: `auth_session`)
- **Format**: JSON with authenticated flag, timestamp, and expiration
- **Validation**: Automatic validation on app load and route changes

## Security Features

1. **Session Validation**: Sessions are validated before allowing access
2. **Expiration**: Sessions automatically expire after 24 hours
3. **Storage**: Session data is stored securely in localStorage
4. **Password Hashing**: Credentials are validated using SHA-256
5. **Route Protection**: All routes except `/login` require authentication

## Customization

### Change Master Password

Edit `/lib/auth.ts`:
```tsx
const MASTER_PASSWORD = 'your-new-password';
```

### Change Daily Catchphrases

Edit the `catchphrases` array in `/lib/auth.ts`:
```tsx
const catchphrases = [
  'your-phrase-1',
  'your-phrase-2',
  // ...
];
```

### Adjust Session Duration

Edit `/lib/auth.ts`:
```tsx
const SESSION_DURATION = 12 * 60 * 60 * 1000; // 12 hours instead
```

### Customize Login UI

Edit `/app/login/page.tsx` to change colors, layout, or animations.

## Troubleshooting

### "Invalid password or catchphrase" error
- Check that the master password is exactly `ace08`
- Check that the catchphrase matches today's phrase (case-insensitive)
- Make sure you're not on the wrong date (check system time)

### Still logged in after closing browser
- Sessions persist in localStorage
- Clear browser storage to force logout
- Or manually call `logout()` from the auth context

### Can't access protected pages
- Check that AuthProvider and AuthGuard are properly wrapped in layout.tsx
- Verify authentication status using browser dev tools
- Check localStorage for `auth_session` key

## Integration from Portfolio

This authentication system was integrated from the Aakanksha Tayade portfolio project, maintaining the original security approach and premium UI aesthetic while adapting it for a Next.js environment.
