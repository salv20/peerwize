/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxl: "1380px",
      },
      container: {
        padding: "15px",
      },
      backgroundImage: {
        frame_img: 'url("/workspace.png")',
      },
    },

    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
