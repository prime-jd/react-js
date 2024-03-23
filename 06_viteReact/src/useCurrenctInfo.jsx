import { useEffect, useState } from "react";


function useCurrencyInfo(name) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetchData(name);
    }, [name]);

    const fetchData = (name) => {
        fetch(`https://api.github.com/users/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setData([data["name"], data["followers"], data["public_repos"]]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData([]);
            });
    };

    // Function to trigger data fetching
    const triggerFetch = (newName) => {
        fetchData(newName);
    };

    return [data, triggerFetch]; // Return data and function to trigger data fetching
}

export default useCurrencyInfo;
