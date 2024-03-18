# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tailwind In Vite

## Installation
terminal

``` 
   > npm create vite@latest my-project -- --template react
   > cd my-project

   > npm install -D tailwindcss postcss autoprefixer
   > npx tailwindcss init -p
```
tailwindConfig.js
``` javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
```
> npm run dev