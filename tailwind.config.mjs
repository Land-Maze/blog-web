/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#131320",
        primary: "#f67e84",
        secondary: "#00547a",
        accent: "#9ba569",
      },
      fontFamily: {
        body: ['"Roboto"', "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
      },
	  spacing: {
		pagemax: "1536px",
		18: "4.75rem",
	  },
	  screens: {
		xs: "385px",
	  }
    },
  },
  plugins: [],
};
