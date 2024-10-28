/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                dark: "#2E2F34",
                light: "#EBEBEB",
                primary: "#4FA1E2",
            },
        },
    },
    plugins: [],
};
