/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#2563EB',
          600: '#1D4ED8',
          700: '#1E40AF',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        bg: {
          page: '#F8FAFC',
          card: '#FFFFFF',
          hover: '#F1F5F9',
        },
        border: '#E2E8F0',
        text: {
          primary: '#1E293B',
          secondary: '#64748B',
          disabled: '#94A3B8',
        },
        agent: {
          planning: '#8B5CF6',
          design: '#EC4899',
          rendering: '#F97316',
          list: '#14B8A6',
          production: '#6366F1',
          construction: '#84CC16',
          promotion: '#06B6D4',
        },
      },
      borderRadius: {
        btn: '8px',
        card: '12px',
        modal: '16px',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)',
        'card-hover': '0 4px 12px 0 rgba(0,0,0,0.15)',
        modal: '0 25px 50px -12px rgba(0,0,0,0.25)',
      },
    },
  },
  plugins: [],
}
