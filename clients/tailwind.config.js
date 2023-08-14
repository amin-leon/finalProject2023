/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    colors: {
      transparent: 'transparent',
      slate: '#94a3b8',
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      }
    },
  },
  plugins: [],
});