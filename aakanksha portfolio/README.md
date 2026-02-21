# Aakanksha Portfolio Authentication System

This folder contains a standalone, premium authentication system for your portfolio.

## Files Included:
1. **`index.html`**: The main login page. It includes the premium design, the hashing logic, and the "encrypted" catchphrase database.
2. **`auth.js`**: A helper script to protect your other portfolio pages.

## How to use:
1.  **Protecting your pages**:
    Add this script tag to the `<head>` of any HTML file you want to protect (e.g., `portfolio.html`, `work.html`):
    ```html
    <script src="auth.js"></script>
    ```

2.  **Passwords**:
    *   **Master Password**: `ace08` (Always works)
    *   **Catchphrases**: The system uses the same daily catchphrases as your previous project.

3.  **Customization**:
    *   Change `LOGIN_PAGE` in `auth.js` if your login file is named differently.
    *   Update `window.location.href` in `index.html` (line 270) to point to your main portfolio entrance.

## Security Note:
The catchphrase hashes have been obfuscated (Base64 + Character Shifting) inside `index.html` to prevent simple scraping while keeping the system serverless.
