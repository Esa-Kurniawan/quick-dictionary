/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
    darkMode: "class",
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        colors: {
            transparent: colors.transparent,
            gray: colors.gray,
            neutral: colors.neutral,
            "light-teal": "#2dd4bf",
            teal: "#14b8a6",
            "dark-teal": "#0d9488",
            "light-blue": "#60a5fa",
            blue: "#3b82f6",
            "dark-blue": "#2563eb",
            "light-red": "#f87171",
            red: "#f87171",
            "dark-red": "#ef4444",
            "light-yellow": "#facc15",
            yellow: "#eab308",
            "dark-yellow": "#ca8a04",
        },
        extend: {},
    },
    plugins: [],
};
