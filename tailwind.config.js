/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors : {
        'var-black' : '#070707',
        'var-yellow' : '#EAFE52',
        'var-pink' : '#E84CA9',
      },
      fontSize: {
        h1: ['54px', '1px'],
        h2: ['40px', '1px'],
        h2: ['35px', '1px'],
        txt1: ['20px', '1px'],
        txt2: ['20px', '1px'],
        txt3: ['16px', '1pxh'],
      },
      fontFamily : {
        'ppneuemachina': 'var(--font-ppneuemachina)',
        'rnssanz': 'var(--font-rnssanz)',
        'visbycf': 'var(--font-visbycf)',
      }
    },
  },
  plugins: [],
}
