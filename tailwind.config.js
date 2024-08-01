/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: { primary: "var(--font-openSans)" },
    extend: {
      backgroundColor: {
        light: {
          primary: "#FFFFFF",
          gray: "#F3F1EF",
          brand: "#9BBBFC",
          overlay: "#00000065",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(180deg, #9BBBFC -37.96%, #F9CE69 129.63%)",
        "section-gradient":
          "linear-gradient(182deg, rgba(155, 187, 252, 0.20) -8.24%, #FFF 124.97%)",
      },

      fontSize: {
        "fluid-display": "clamp(40px, 4vw + 1rem, 64px)",
        "fluid-h1": "clamp(32px, 4vw + 1rem, 40px)",
        "fluid-h2": "clamp(24px, 3vw + 0.75rem, 36px)",
        "fluid-h3": "clamp(18px, 2.5vw + 0.5rem, 28px)",
        "fluid-h4": "clamp(16px, 2vw + 0.5rem, 24px)",
        "fluid-h5": "clamp(14px, 1.5vw + 0.25rem, 20px)",
        "fluid-h6": "clamp(12px, 1vw + 0.25rem, 16px)",
      },
      lineHeight: {
        "fluid-display": "clamp(48px, 4vw + 2rem, 70px)",
        "fluid-h2": "clamp(41px, 5vw + 0.75rem, 50px)",
        "fluid-h3": "clamp(31px, 4vw + 0.5rem, 40px)",
        "fluid-h4": "clamp(27px, 3.5vw + 0.5rem, 34px)",
        "fluid-h5": "clamp(24px, 3vw + 0.25rem, 30px)",
        "fluid-h6": "clamp(20px, 2.5vw + 0.25rem, 26px)",
      },
      colors: {
        primary: {
          "lightest-02": "#F7FBFE",
          lightest: "#D7E8FE",
          lighter: "#C3DAFE",
          light: "#B4CEFD",
          DEFAULT: "#9BBBFC",
          dark: "#718FD8",
          darker: "#4E69B5",
          darkest: "#314792",
          "darkest-02": "#091146",
        },
        secondary: {
          "lightest-02": "#F3F2FE",
          lightest: "#BEBAF6",
          lighter: "#9690E4",
          light: "#736DC9",
          DEFAULT: "#4741A6",
          dark: "#342F8E",
          darker: "#342F8E",
          darkest: "#171460",
          "darkest-02": "#04032E",
        },
        tertiary: {
          "lightest-02": "#FEFDF3",
          lightest: "#FEF2C3",
          lighter: "#FDE8A5",
          light: "#FBDE8E",
          DEFAULT: "#F9CE69",
          dark: "#D6A84C",
          darker: "#B38534",
          darkest: "#906521",
          "darkest-02": "#452206",
        },
        typography: {
          light: {
            primary: "#101319",
            secondary: "#83868C",
            tertiary: "#B1B4BA",
            brand: "#4741A6",
            "on-color": "#FFFFFF",
          },
        },
        ghost: {
          primary: {
            10: "#9BBBFC10",
            20: "#9BBBFC20",
            30: "#9BBBFC30",
            40: "#9BBBFC40",
          },
          secondary: {
            10: "#4741A610",
            20: "#4741A620",
            30: "#4741A630",
            40: "#4741A640",
          },
          tertiary: {
            10: "#F9CE6910",
            20: "#F9CE6920",
            30: "#F9CE6930",
            40: "#F9CE6940",
          },
        },
        border: {
          light: {
            primary: "#DDDAD7",
          },
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      width: {
        hero: "min(100vw - 80px, 1200px)",
      },
      boxShadow: {
        sm: "0px 1px 1px 0px #00000011",
        md: "0px 3px 5px 0px rgba(0, 0, 0, 0.16), 0px 1px 18px 0px rgba(0, 0, 0, 0.09), 0px 6px 10px 0px rgba(0, 0, 0, 0.11)",
      },
      textShadow: {
        sm: "0px 1px 1px rgba(0, 0, 0, 0.11), 0px 2px 1px rgba(0, 0, 0, 0.09), 0px 1px 3px rgba(0, 0, 0, 0.16)",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(80px, 1fr))",
        30: "repeat(30, minmax(40px, 1fr))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          textShadow:
            "0px 1px 1px rgba(0, 0, 0, 0.11), 0px 2px 1px rgba(0, 0, 0, 0.09), 0px 1px 3px rgba(0, 0, 0, 0.16)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
