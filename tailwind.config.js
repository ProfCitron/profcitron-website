const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                //sans: ['Nunito', ...defaultTheme.fontFamily.sans],
                'be-vietnam-pro': ['Be Vietnam Pro', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif']
            },
        },
        colors: {
            'rougeRuban': '#EC0B43',
            'jauneAurore': '#FFCA2C',
            'noirEncre': '#151515',
            'bleuKlein': '#0740AF',
            'bleuCiel': '#8BB7FC',
            'jauneNaples': '#FFE6A9',
            'rougeDragee': '#FFD4E2',
            'blanc': '#FFFFFF'
        }
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],

};
