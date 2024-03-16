# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# Rendering

Here's how rendering generally works in a React application:

Initial Rendering:

When your application starts, React builds a virtual representation of the DOM based on your component hierarchy.
This virtual DOM is a lightweight copy of the actual DOM and contains React elements, which are JavaScript objects representing the UI components.
React then compares this virtual DOM with the actual DOM to find out what has changed.
Updating the DOM:

When there's a change in the application state, such as user interaction or data fetching, React re-renders the affected components.
Instead of directly updating the actual DOM, React first updates the virtual DOM.
React then performs a process called reconciliation, where it calculates the difference between the previous virtual DOM and the new virtual DOM.
Reconciliation:

React identifies the minimal set of changes needed to update the actual DOM to match the new virtual DOM.
This process is efficient because React only updates the parts of the DOM that have actually changed, rather than re-rendering the entire DOM tree.
Rendering the Updated DOM:

Once the reconciliation process is complete, React updates the actual DOM to reflect the changes.
This may involve adding, removing, or updating elements on the page as necessary.
Lifecycle Methods:

Throughout the rendering process, React components have access to special lifecycle methods that allow them to perform actions at specific points in the component's lifecycle.
These methods include componentDidMount, componentDidUpdate, and componentWillUnmount, among others, which allow components to execute code before or after rendering, or when the component is about to be removed from the DOM.
Optimizations:

React also implements various optimizations to improve rendering performance, such as memoization, shouldComponentUpdate, PureComponent, and React.memo, which help reduce unnecessary re-renders and make rendering more efficient.