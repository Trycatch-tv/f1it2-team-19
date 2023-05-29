/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7462D0',
        black: '#000000',
        white: '#FFFFFF',
        inactive_color: '#E2E2E2',
        border_color: '#0B090B80',
        primary_dark_color: '#10111D',
        hard_dark_color: '#2A2933',
        soft_dark_color: '#F1F1F1',
        inactive_dark_color: '#33343A',
        border_dark_color: '#CECECE80'

      },
      fontFamily: {
        Poppins: 'Poppins'
      }
    }
  },
  plugins: []
}
