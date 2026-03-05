// ═══════════════════════════════════════════════
// RoofIgnite Command Center — Configuration
// ═══════════════════════════════════════════════
// Edit the values below when URLs or tokens change.
// The app will pick these up automatically on next page load.

const CONFIG = {
  // Google OAuth Client ID (for @roofignite.com login gate)
  // Get this from: https://console.cloud.google.com/apis/credentials → Create OAuth 2.0 Client ID
  GOOGLE_CLIENT_ID: '441152547871-18g0fpgbao19hi493csc1johtjvqe5ka.apps.googleusercontent.com',

  // Google Apps Script Web App URL (for write operations)
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyXDREtEeLeXggNxKVFcrQfMtLdK5YdXHfdfshOqlhUcOSWd66XDfMWAbaHIwAQAfT7/exec',

  // Google Sheet ID
  SHEET_ID: '1W560POSt6T4QsNObZGxz2BKyCNvRIW7dubAxhIVkAy4',

  // Pod sheet GIDs
  SHEETS: {
    'Pod 2 - RoofIgnite': 0,
    'Pod 1 - RoofIgnite': 295240236
  },

  // Lead sheet GIDs
  LEAD_SHEETS: {
    'ALL_ROOF': 1440123496,
    'ALL_CiGN': 951162408
  },

  // Meta API
  META_ACCESS_TOKEN: 'EAASdzH5TwEUBQRgZAhUKhIO1fHvuZCW9NA5ZBxJ2kxZAiRGDcKhY3FRQBwF53rzAtU4UADlTZCjZCvAKtAzdvPlDjeHZC5mrrmVe4RpSxcn1zJwDopKk7TaIz7ydeLYDFhXGgl8tB8Yd2HwZBaeVhU6DgOJt87xz0oHRA88lU6Ym9ZAhJVK4PK0P8VN4p2NsYLzS6kAZDZD',
  META_API_VERSION: 'v20.0',

  // Slack Defaults
  SLACK: {
    DEFAULT_BILLING_ADMIN: 'Oscar',
    PERCENTAGE_INTERVALS: [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100],
  }
};
