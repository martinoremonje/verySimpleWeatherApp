/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Corrección importante
    "./node_modules/flowbite/**/*.js", // Mantenemos esta línea
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};