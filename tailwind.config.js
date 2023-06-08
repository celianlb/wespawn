/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rnssanz-light' : ['var(--font-rnssanz-light)'],
        'rnssanz-bold' : ['var(--font-rnssanz-bold)'],
        'ppneuemachina' : ['var(--font-ppneuemachina)'],
      },
      textColor: {
        'black-spec' : '#070707',
        'pink-spec' : '#E84CA9',
        'yellow-spec' : '#D2F843',
      },
      colors: {
        'black-spec' : '#070707',
        'pink-spec' : '#E84CA9',
        'yellow-spec' : '#D2F843',
      },
      backgroundColor: {
        'black-spec' : '#070707',
        'pink-spec' : '#E84CA9',
        'yellow-spec' : '#D2F843',
      },

      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
}
