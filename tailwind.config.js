/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          xl: '5rem',
        },
        center: true,        
      },
      colors : {
        'var-black' : '#1D1B26',
        'var-yellow' : '#DCFF03',
        'var-pink' : '#E84CA9',
        'var-grey' : '#2F2B3F',
        'var-blue' : '#02FEF3',
      },
      fontSize: {
        'h1-ds': ['48px'],
        'h1-mobil': ['32px'],
        'h2-ds': ['32px'],
        'h2-mobil': ['24px'],
        'h3-ds': ['24px'],
        'h3-mobil': ['16px'],
        'txt': ['16px'],
        'txt-xs': ['12px'],
        'txt-btn-ds': ['16px'],
        'txt-btn-mobil': ['12px'],
      },
      fontFamily : {
        'montserratblack': 'var(--font-montserratblack)',
        'rnssanz': 'var(--font-rnssanz)',
        'rnssanzbold': 'var(--font-rnssanzbold)',
      }
    },
  },
  plugins: [],
}
