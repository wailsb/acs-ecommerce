/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    darkMode: ['class', '[data-theme="dark"]'],
    extend: {
  		colors: {
			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
      iconColor:'hsl(var(--icon-color))',
  		black: 'black',
  		white: 'white',
  		gray1: '#232327',
  		transparent: 'transparent'
  		},
    },
  },
  plugins: [],
};
