/**
 * Aakanksha Portfolio Authentication System
 * ----------------------------------------
 * This file handles session validation and redirection.
 * Include this at the TOP of every protected HTML page.
 * 
 * Usage: <script src="auth.js"></script>
 */

(function () {
    const SESSION_KEY = 'auth_session_date';
    const LOGIN_PAGE = 'index.html'; // Path to your login page

    /**
     * Get current date string in IST format (YYYY-MM-DD)
     */
    function getISTDate() {
        try {
            return new Intl.DateTimeFormat('en-CA', {
                timeZone: 'Asia/Kolkata',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            }).format(new Date());
        } catch (e) {
            return new Date().toDateString();
        }
    }

    /**
     * Check if user is authenticated for today
     */
    function isAuthenticated() {
        try {
            return localStorage.getItem(SESSION_KEY) === getISTDate();
        } catch (e) {
            return false;
        }
    }

    // Determine current state
    const authenticated = isAuthenticated();
    const isLoginPage = window.location.pathname.endsWith(LOGIN_PAGE) || 
                       window.location.pathname.endsWith('/') ||
                       document.querySelector('meta[name="auth-page"]') !== null;

    if (isLoginPage) {
        // If on login page and already authenticated, skip to portfolio
        if (authenticated) {
            window.location.replace('portfolio.html');
        }
    } else {
        // If on protected page and NOT authenticated, kick back to login
        if (!authenticated) {
            window.location.replace(LOGIN_PAGE);
        }
    }
})();
