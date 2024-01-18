/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        githubMobile: "url('/assets/images/Github/github_mobile.png')",
        githubDesktop: "url('/assets/images/Github/github_desktop.png')",
      },
      backgroundColor: {},
      borderColor: {},
      textColor: {},
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
