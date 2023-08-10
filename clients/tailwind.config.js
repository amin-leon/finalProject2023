// export const content = [
//   "./src/**/*.{js,jsx,ts,tsx}",
  // 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
// ];
// export const theme = {
  // container: {
  //   center: true,
  // },
//   extend: {},
// };
// export const plugins = [];

/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
 
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
});