/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {
    darkMode: 'class',
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  Templates within theme app (<tailwind_app_name>/templates), e.g. base.html. */
        '../templates/**/*.html',

        /*
         * Main templates directory of the project (BASE_DIR/templates).
         * Adjust the following line to match your project structure.
         */
        '../../templates/**/*.html',

        /*
         * Templates in other django apps (BASE_DIR/<any_app_name>/templates).
         * Adjust the following line to match your project structure.
         */
        '../../**/templates/**/*.html',

        './node_modules/flowbite/**/*.js'

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {
            colors: {
                "primary": {
                    '50': '#f5f8f7',
                    '100': '#dee9e6',
                    '200': '#bdd2cc',
                    '300': '#94b4ac',
                    '400': '#6d948b',
                    '500': '#4c6f68',
                    '600': '#41605a',
                    '700': '#374e4b',
                    '800': '#2f403d',
                    '900': '#2a3735',
                    '950': '#141f1d',
                },
                "orangeprimary": {
                    "50": "#fdf4eb",
                    "100": "#fbe9d6",
                    "200": "#f8d3ad",
                    "300": "#f4be84",
                    "400": "#f1a85b",
                    "500": "#ed9232",
                    "600": "#be7528",
                    "700": "#8e581e",
                    "800": "#5f3a14",
                    "900": "#2f1d0a"
                },
                "gray": {
                    "50": "#f0f2f2",
                    "100": "#e1e4e6",
                    "200": "#c4c9cc",
                    "300": "#a6aeb3",
                    "400": "#899399",
                    "500": "#6b7880",
                    "600": "#566066",
                    "700": "#40484d",
                    "800": "#2b3033",
                    "900": "#15181a"
                },
                "oldprimary": {
                    "50": "rgb(241, 248, 252)",
                    "100": "rgb(227, 241, 249)",
                    "200": "rgb(201, 227, 243)",
                    "300": "rgb(163, 208, 235)",
                    "400": "rgb(102, 176, 222)",
                    "500": "rgb(44, 143, 205)",
                    "600": "rgb(35, 114, 163)",
                    "700": "rgb(30, 100, 143)",
                    "800": "rgb(24, 79, 113)",
                    "900": "rgb(20, 65, 93)"
                  },
            }
          },
          fontFamily: {
            'body': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ],
            'sans': [
                'Inter',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'system-ui',
                'Segoe UI',
                'Roboto',
                'Helvetica Neue',
                'Arial',
                'Noto Sans',
                'sans-serif',
                'Apple Color Emoji',
                'Segoe UI Emoji',
                'Segoe UI Symbol',
                'Noto Color Emoji'
            ]
        }
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
        require('flowbite/plugin'),
    ],
}
