/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        lime: "#B9F566",
        violet: "#8378F7",
      },
    },
  },
  plugins: [],
};
