/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#10b981",
        // refuseColor: '#B80000',
        // defaultText: '#424856',
        // primaryTextColor: '#171A1F'
      },
    },
  },
  plugins: [],
};
