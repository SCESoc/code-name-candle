module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockquote: {
              borderLeftColor: "#1aa8ad",
            },
          },
        },
        light: {
          css: {
            color: theme("colors.gray.400"),
            '[class~="lead"]': {
              color: theme("colors.gray.300"),
            },
            a: {
              color: theme("colors.white"),
            },
            strong: {
              color: theme("colors.white"),
            },
            "ol > li::before": {
              color: theme("colors.gray.400"),
            },
            "ul > li::before": {
              backgroundColor: theme("colors.gray.600"),
            },
            hr: {
              borderColor: theme("colors.gray.200"),
            },
            blockquote: {
              color: theme("colors.gray.200"),
              borderLeftColor: theme("colors.green.600"),
            },
            h1: {
              color: theme("colors.white"),
            },
            h2: {
              color: theme("colors.white"),
            },
            h3: {
              color: theme("colors.white"),
            },
            h4: {
              color: theme("colors.white"),
            },
            "figure figcaption": {
              color: theme("colors.gray.400"),
            },
            code: {
              color: theme("colors.white"),
            },
            "a code": {
              color: theme("colors.white"),
            },
            pre: {
              color: theme("colors.gray.200"),
              backgroundColor: "#161B22",
            },
            thead: {
              color: theme("colors.white"),
              borderBottomColor: theme("colors.gray.400"),
            },
            "tbody tr": {
              borderBottomColor: theme("colors.gray.600"),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
}
