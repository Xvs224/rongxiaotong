/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'youshebiaotihhei': ['YouSheBiaoTiHei', 'sans-serif'], // 定义字体名称
      },
      colors: {
        // 暖秋丰收色调（terracotta + amber + cream）
        harvest: {
          50: '#fff8f1',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
      },
      boxShadow: {
        'warm': '0 10px 40px -10px rgba(194, 65, 12, 0.25)',
        'warm-lg': '0 20px 60px -15px rgba(194, 65, 12, 0.35)',
      },
      backgroundImage: {
        'harvest-gradient': 'linear-gradient(135deg, #c2410c 0%, #d97706 50%, #f59e0b 100%)',
        'warm-radial': 'radial-gradient(circle at top right, #ffedd5 0%, #fff8f1 60%)',
      },
    },
  },
  plugins: [],
}
