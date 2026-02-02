/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
    theme: {
        extend: {
            colors: {
                brand: {
                    gold: "#c5a358",
                    charcoal: "#0f0f0f",
                    accent: "#ea580c",
                },
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
};
export const plugins = [];