/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        magnolia: "var(--color-magnolia)",
        cinder: "var(--color-cinder)",
        "athens-gray": "var(--color-athens-gray)",
        "gray-suit": "var(--color-gray-suit)",
        "gun-powder": "var(--color-gun-powder)",
        ebony: "var(--color-ebony)",
        shark: "var(--color-shark)",
        melrose: "var(--color-melrose)",
        shark2: "var(--color-shark2)",
        "persian-blue": "var(--color-persian-blue)",
        "royal-blue": "var(--color-royal-blue)",
        shark3: "var(--color-shark3)",
        "hawkes-blue": "var(--color-hawkes-blue)",
        "titan-white": "var(--color-titan-white)",
      },
    },
  },
  plugins: [],
};