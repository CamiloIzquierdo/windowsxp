/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                xp: {
                    "folder-blue": "#6784df",
                },
            },
        },
    },
    plugins: [],
};
