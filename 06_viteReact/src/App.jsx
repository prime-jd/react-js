import { useState } from 'react';
import useCurrencyInfo from './useCurrenctInfo';

function MyComponent() {
    const [name, setName] = useState("");
    const [data, triggerFetch] = useCurrencyInfo(name);

    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    const handleButtonClick = () => {
        triggerFetch(name);
    };

    const handleClearButtonClick = () => {
        setName(''); // Clear the input value by setting the state to an empty string
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Enter GitHub username"
            />
            
            <button onClick={handleClearButtonClick}>Clear Input</button>
            <p>Name: {data[0]}</p>
            <p>Followers: {data[1]}</p>
            <p>Public Repos: {data[2]}</p>
        </div>
    );
}

export default MyComponent;
