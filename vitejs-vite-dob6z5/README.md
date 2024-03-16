# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Rendering

Here's how rendering generally works in a React application:

## 1. Initial Rendering:

When your application starts, React builds a virtual representation of the DOM based on your component hierarchy.
This virtual DOM is a lightweight copy of the actual DOM and contains React elements, which are JavaScript objects representing the UI components.
React then compares this virtual DOM with the actual DOM to find out what has changed.

## 2. Updating the DOM:

When there's a change in the application state, such as user interaction or data fetching, React re-renders the affected components.
Instead of directly updating the actual DOM, React first updates the virtual DOM.
React then performs a process called reconciliation, where it calculates the difference between the previous virtual DOM and the new virtual DOM.

## 3. Reconciliation:

React identifies the minimal set of changes needed to update the actual DOM to match the new virtual DOM.
This process is efficient because React only updates the parts of the DOM that have actually changed, rather than re-rendering the entire DOM tree.

## 4. Rendering the Updated DOM:

Once the reconciliation process is complete, React updates the actual DOM to reflect the changes.
This may involve adding, removing, or updating elements on the page as necessary.

## 4. Lifecycle Methods:

Throughout the rendering process, React components have access to special lifecycle methods that allow them to perform actions at specific points in the component's lifecycle.
These methods include componentDidMount, componentDidUpdate, and componentWillUnmount, among others, which allow components to execute code before or after rendering, or when the component is about to be removed from the DOM.

## 5. Optimizations:

React also implements various optimizations to improve rendering performance, such as memoization, shouldComponentUpdate, PureComponent, and React.memo, which help reduce unnecessary re-renders and make rendering more efficient.
##

# Virtual DOM

The Virtual DOM is a lightweight, in-memory representation of the actual DOM. It is a JavaScript-based abstraction that React uses to render UI components. When changes occur in a React component, instead of directly updating the actual DOM, React first updates the Virtual DOM. React then compares the updated Virtual DOM with the previous state of the Virtual DOM to identify what parts of the actual DOM need to be updated. This process, known as reconciliation or diffing, allows React to minimize DOM updates and improve performance.

## Fibre Architecture

The Fiber architecture is an internal reimplementation of the reconciliation algorithm and rendering pipeline in React. Introduced in React version 16, Fiber was designed to improve the performance and responsiveness of React applications, particularly in handling complex UI interactions and animations.

Fiber introduces a more flexible and prioritized approach to rendering updates. It breaks down the rendering process into smaller units of work called "fibers" and implements a scheduling algorithm to prioritize and interrupt rendering tasks. This allows React to perform work in chunks, making the application more responsive by ensuring that high-priority updates (e.g., user interactions) are processed without blocking the main thread.

The Fiber architecture doesn't change how React renders components conceptually; instead, it reorganizes the internal implementation of the reconciliation algorithm to enable features like async rendering, incremental rendering, and better support for concurrent mode.
#

# Hooks

In React, hooks are functions that allow you to use state and other React features in functional components. They were introduced in React 16.8 to address some of the limitations of class components, particularly around reusing stateful logic.

Here are some common React hooks:

## useState
Allows functional components to manage local state. It returns a stateful value and a function to update it, similar to this.state and this.setState() in class components.

## useEffect
Allows performing side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It runs after every render by default.

## useContext
Allows accessing the nearest context object in the component tree.

## useReducer
Alternative to useState. Accepts a reducer function with the current state and an action, returning the new state.