module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      boxShadow : {
        'bt-shadow': '0px 5px 7px -7px rgba(0,0,0,0.4)',
      },
      colors: {
        'seal-brown': '#5d4b4b',
        'dark-grey': '#131313',
      },
      animation: {
        'bounce-slow': 'bounce 2.6s ease-in-out infinite',
        'bounce-normal': 'bounce 2.5s ease-in-out infinite',
        'bounce-fast': 'bounce 2.4s ease-in-out infinite',
      },
  },
  plugins: [],
  }
}
