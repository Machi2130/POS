/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#135bec',
          hover: '#0d47b8',
          light: 'rgba(19, 91, 236, 0.1)',
          dark: '#0a3399',
        },
      },
      backgroundColor: {
        'dark': '#0a0e1a',
        'card-dark': '#1a1f2e',
        'topnav-bg': '#1a1f2e',
        'sidebar-bg': '#121822',
      },
      textColor: {
        'muted': '#4b5563',
        'secondary': '#9ca3af',
      },
      borderColor: {
        'border-color': 'rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}
