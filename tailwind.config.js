/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "../storybook/stories/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#317C82",
          50: "#e1f2f3",
          100: "#b3dcdc",
          200: "#80c5c5",
          300: "#4eaeae",
          400: "#2e9495",
          500: "#317C82",
          600: "#29696d",
          700: "#205357",
          800: "#173d41",
          900: "#0f272b"
        },
        accent: {
          DEFAULT: "#D3A24C",
        },
        dark: {
          DEFAULT: "#1C5F62",
        }
      }
    }
  },
  plugins: []
};
