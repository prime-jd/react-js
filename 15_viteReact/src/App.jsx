import React, { useState } from 'react';
import './App.css';
import Input from './components/Input';
import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit} = useForm();
    const [input, setInput] = useState('')
    const onSubmit = (data) => {
        console.log(data.name);
        setInput(data.name)
        //console.log(values); // Log the entire values object
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    
                    {...register("name")}
                />
                <button type="submit">Submit</button>
            </form>
            <div>{input}</div>
        </div>
    );
}

export default App;
