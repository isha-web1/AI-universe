/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#5cabd6",
          
 "secondary": "#ca60db",
          
 "accent": "#54f9c5",
          
 "neutral": "#27222a",
          
 "base-100": "#f7f6f8",
          
 "info": "#abd3e3",
          
 "success": "#27be5f",
          
 "warning": "#f7ce6e",
          
 "error": "#f26469",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

