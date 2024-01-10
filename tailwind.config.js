/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        CoolveticaCondReg: ["Coolvetica-Condreg"],
        CoolveticaReg: ["Coolvetica-Reg"],
        SourceSansProSemibold: ["SourceSansPro-Semibold"],
        SourceSansProBold: ["SourceSansPro-Bold"],
        InterSemibold: ["Inter-Semibold"],
        InterBold: ["Inter-Bold"],
        ConsolasRegular: ["Consolas-Regular"],
        ConsolasBold: ["Consolas-Bold"],
      },
      colors: {
        // BG Color
        "white-MainPage": "#F8FAFC",
        // Neutral Color
        "neutral-a": "#FAFDFF",
        "neutral-b": "#C3D4DB",
        "neutral-c": "#9CADB4",
        "neutral-d": "#75868D",
        "neutral-e": "#4E5F66",
        "neutral-f": "#27383F",
        "neutral-g": "#001118",
        // Light Blue Color
        "LightBlue-a": "#84D4E1",
        "LightBlue-b": "#2EC1D9",
        "LightBlue-c": "#1AB0C8",
        "LightBlue-d": "#179FB5",
        "LightBlue-e": "#158B9E",
      },
      keyframes : {
        spin_words: {
          "0%": { transform: "translateY(0%)" },
          "20%": { transform: "translateY(0%)" },
          "30%": { transform: "translateY(50%)" },
          "70%": { transform: "translateY(50%)" },
          "80%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        movingImagination: "spin_words 4s ease-in-out infinite",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
