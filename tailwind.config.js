/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        twitter: "#1DA1F2",
        linkedin: "#0A66C2",
        github: "#000",
      },
      backgroundImage: {
        gradient: "bg-[url('/src/assets//gradient-bg.jpg')]",
      },
    },
  },
  plugins: [],
};
