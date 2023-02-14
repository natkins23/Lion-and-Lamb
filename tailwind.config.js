/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                heartbeat: 'ping 1.5s cubic-bezier(.8 , 2, .4, .1) infinite',
            },
            keyframes: {
                heartbeat: {
                    // '0%': {
                    //     transform: 'scale(2)',
                    // },
                    // '14%': {
                    //     transform: 'scale(.1)',
                    // },
                    // '20%': {
                    //     transform: 'scale(1.3)',
                    // },
                    // '28%': {
                    //     transform: 'scale(1)',
                    // },
                    '25%, 50%': {
                        transform: 'scale(2)',
                        backgroundColor: 'green',
                        opacity: '1',
                    },
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '1',
                    },
                },
            },
        },
    },
    plugins: [],
}
