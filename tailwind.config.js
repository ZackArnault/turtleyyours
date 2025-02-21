import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto', ...defaultTheme.fontFamily.sans],
                accent: ['Bebas Neue', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                brand: {
                    primary: "#7565B9",  // Purple
                    secondary: "#4FB7C7", // Teal
                    tertiary: "#1C4D74", // Blue
                    accent: "#EBC749",  // Yellow
                    lightPurple: "#B5A3FF", // Light Purple (Background)
                    lightGold: "#FFE58A", // light gold
                    lightTeal: "#89EFFF", // Darker teal
                    lightBlue: "#4E90C4", // Light blue
                    darkPurple: "#473A7A", // dark purple
                    darkGold: "#C5A844", // dark gold
                    darkTeal: "#3E8C98", // dark teal
                    darkBlue: "#102A43", // dark navy blue
                    gray: {
                        light: "#E0E0E0",
                        DEFAULT: "#7A7A7A",
                        dark: "#101010",
                    },
                },
            },
        },
    },

    plugins: [forms],
};
