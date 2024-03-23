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
  content: [
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
```

# About props(obj) as parameter in function

In React JSX, the props parameter refers to the properties passed to a React component. When you define a component in React, you can pass data to it using attributes. These attributes become properties of the props object within the component.

``` javascript
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

ReactDOM.render(
  <Greeting name="John" />,
  document.getElementById('root')
);
```
In this example, name is a prop passed to the Greeting component. Inside the Greeting component, props.name accesses the value of the name prop.

Props can be anything from simple data types like strings or numbers to complex objects and functions. They allow you to customize and configure your components dynamically.