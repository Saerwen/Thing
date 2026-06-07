/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Privatus design tokens — boutique merchant bank meets Duolingo
        primary: '#4B2E83', // deep purple
        'primary-dark': '#3A2266',
        gold: '#C9A24B', // correct / XP / completion
        teal: '#1F6F6B', // secondary
        success: '#2E7D32',
        error: '#C0392B',
        cream: '#FAF7F2', // background
        surface: '#FFFFFF',
        ink: '#1A1523',
        muted: '#6B6478',
      },
      fontFamily: {
        serif: ['Fraunces', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(26, 21, 35, 0.04), 0 8px 24px rgba(26, 21, 35, 0.08)',
        'card-hover': '0 2px 4px rgba(26, 21, 35, 0.06), 0 12px 32px rgba(26, 21, 35, 0.12)',
        node: '0 4px 14px rgba(75, 46, 131, 0.25)',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%': { transform: 'translateX(-8px)' },
          '40%': { transform: 'translateX(8px)' },
          '60%': { transform: 'translateX(-5px)' },
          '80%': { transform: 'translateX(5px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '60%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'check-draw': {
          '0%': { strokeDashoffset: '48' },
          '100%': { strokeDashoffset: '0' },
        },
        'pulse-urgent': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        shake: 'shake 0.4s ease-in-out',
        pop: 'pop 0.3s ease-out',
        'slide-up': 'slide-up 0.35s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'check-draw': 'check-draw 0.4s ease-out forwards',
        'pulse-urgent': 'pulse-urgent 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
