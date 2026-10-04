/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#155EEF',
          blueDark: '#0D47A1',
          teal: '#0F766E',
          green: '#16A34A',
          amber: '#D97706',
          charcoal: '#111827',
          slate: '#475569',
          surface: '#F8FAFC',
          warm: '#F5F7F8',
          pale: '#EEF3F5',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
