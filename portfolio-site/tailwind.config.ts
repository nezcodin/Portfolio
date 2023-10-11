import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        dinosaursarealive: ['DinosaursAreAlive', 'sans-serif'],
        nanummyeongjo: ['NanumMyeongjo', 'sans-serif']
      },
      colors: {
        background: '#F8EDEB',
        // header: '#FEC5BB',
        text: '#CDEE836',
        button: '#D8E2DC',
        container: '#FAE1DD',
        // childcontainer: '#F5EBE0' (maybe have this be hover color)
        childcontainer: '#FEC5BB'
      }
    },
  },
  plugins: [],
}
export default config
