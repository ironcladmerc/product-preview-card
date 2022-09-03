/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            sm: '375px',
            md: '1440px',
        },
        colors: {
            darkCyan: 'hsl(158, 36%, 37%)',
            veryDarkCyan: 'hsl(158, 36%, 30%)',
            cream: 'hsl(30, 38%, 92%)',
            veryDarkBlue: 'hsl(212, 21%, 14%)',
            darkGrayishBlue: 'hsl(228, 12%, 48%)',
            white: 'hsl(0, 0%, 100%)',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            serif: ['Fraunces', 'serif'],
        },
        fontWeight: {
            medium: '500',
            bold: '700',
        },
        letterSpacing: {
            widest: '.3em',
        },
        extend: {
            height: {
                128: '32rem',
            },
        },
    },
    plugins: [],
}
