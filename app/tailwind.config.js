module.exports = {
  purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('pattern-bg.png')",
      }),
      colors: {        
        'regal-blue': '#243c5a',
        'teal-500': 'rgb(20 184 166)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
