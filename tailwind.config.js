/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-all-sides': '0 0 20px 2px rgba(255, 255, 255, 0.5)', // Customize the shadow as needed
      },
    },
  },
  plugins: [],
}

