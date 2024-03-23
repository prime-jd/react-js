
# Custom Hooks 

Custom hooks in React are JavaScript functions that use React hooks (like useState, useEffect, etc.) but allow you to extract and reuse stateful logic in your components. They provide a way to share logic between components without using higher-order components, render props, or other patterns.

Here's how you can create a custom hook:

1. Define the Hook: Create a JavaScript function that starts with the word use. This convention tells React that this function is a hook.

2. Use React Hooks: Inside your custom hook, you can use existing React hooks like useState, useEffect, useContext, etc., to manage state, side effects, and context.

3. Return Values: Your custom hook should return whatever values or functions you want to make available to the components that use the hook.

4. Reuse: You can then import and use your custom hook in any functional component.

```javascript
import { useState } from 'react';

// Custom hook for managing a counter
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement }; // Return counter value and functions to update it
}

export default useCounter;
```

