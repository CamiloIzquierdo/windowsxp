/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                16: "repeat(16, minmax(0, 1fr))",
                30: "repeat(30, minmax(0, 1fr))",
            },
            gridTemplateRows: {
                16: "repeat(16, minmax(0, 1fr))",
            },
            fontFamily: {
                DigitalDismay: ["DigitalDismay", "sans-serif"],
            },
            colors: {
                xp: {
                    "folder-blue": "#6784df",
                },
            },
        },
    },
    plugins: [],
};
