import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        text: "#031104",
        bg:"#ffffff",
        primary: "#1c1579",
        secondary:"#247168",
        accent:"#4f3230"
      }
    },
    backgroundImage:{
      "hero": "linear-gradient(to right bottom ,rgba(0,0,0,0.9), rgba(0,0,0,0.6)), url('/bg-2.jpg')"
    }
  },
  plugins: [],
}
export default config
