/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                White: "hsl(0, 0%, 100%)",
                Light_pink: "hsl(275, 100%, 97%)",
                Grayish_purple: "hsl(292, 16%, 49%)",
                Dark_purple: "hsl(292, 42%, 14%)",
            },
            fontFamily: {
                sans: "Work sans",
            },
        },
    },
    plugins: [],
};
