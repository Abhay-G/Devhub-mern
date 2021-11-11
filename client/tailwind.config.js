module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            purple: {
                100: '#F7EFFF',
                200: '#DEBCFF',
                300: '#6666B3',
            },
            blue: {
                100: '#DEE6FF',
                200: '#CED9FF',
                300: '#8EA8FF',
                400: '#7D9BFF',
                500: '#2E4AA4',
            },
            orange: {
                100: '#FFCDB1',
            },
            grey: {
                100: '#EEEEEE',
                200: '#A6A6A6',
            },
            white: '#fff',
        },
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            dropShadow: {
                'custom-1': '0px 8px 24px rgba(236, 218, 255, 0.4)',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
