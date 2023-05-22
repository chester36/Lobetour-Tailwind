/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        dark:'#323232',
        light:'#ffffff',
        cycy:'#04DDB2',
        grey:'#EFF1F3',
        
      }
    },
  },
  plugins: [],
}

