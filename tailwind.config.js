/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ilanit: "url('../public/Assets per page/2 home page/ilanit.png')",
      },
      colors: {
        primary: "#fff9f0",
        navigation: "#916b46",
        "nav-button": "#f3eadb",
        bold: "#402d28",
        letter: "#bb9772",
        "form-stroke": "#a09694",
        accent: "#19ab6e",
        "star-david": "#e3e1e1",
      },
      fontFamily: {
        "cheddar-light": ["Cheddar Gothic Light"],
        "cheddar-regular": ["Cheddar Gothic Regular"],
        "cheddar-bold": ["Cheddar Gothic Bold"],
        "cheddar-black": ["Cheddar Gothic Black"],
        "outfit-light": ["Outfit Light"],
        "outfit-regular": ["Outfit Regular"],
        "outfit-medium": ["Outfit Medium"],
        "outfit-bold": ["Outfit Bold"],
        "outfit-black": ["Outfit Black"],
      },
      animation: {
        "opacity-fade": `fade 3s ease-out forwards`,
      },
      keyframes: {
        fade: {
          from: {
            opacity: 80,
          },
          to: {
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
