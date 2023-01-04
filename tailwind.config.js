/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
    content: [
      "./src/**/*.{html,js}"
  ],
      theme: {
        screens: {
          sm: '435px',
          md: '640px',
          lg: '1000px',
          xl: '1440px',
        },
        colors: {
          'blue': '#1fb6ff',
          'pink': '#ff49db',
          'orange': '#ff7849',
          'white': '#fff',
          'gray-light': ' #EFEFEF',
          'gray-dark': ' #DBDBDB',
          'icon-hover': '#8e8e8e',
        },
        fontFamily: {},
        extend: {
          spacing: {
              '1': '1px',
              '36': '36px',
              '60': '60px',
              '114': '114px',
            '128': '32rem',
            '144': '36rem',
            '268': '268px',
            '333': '333px',
            '470': '470px',
            '820': '820px',
            '975': '975px',
          },
          minWidth: {
              '1/2': '50%',
          },
          maxWidth: {
              '470': '470px',
              '268': '268px',
              '885': '885px',
          },
          borderRadius: {
            '4xl': '2rem',
          }
        },
      }
    }