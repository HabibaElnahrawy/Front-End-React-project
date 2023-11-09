/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
  
   
    
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        
      },
    }
  
  },
  plugins: [],
}
