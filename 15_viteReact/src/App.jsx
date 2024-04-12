import React from 'react';
import './App.css';
import Input from './components/Input';
import { useForm } from 'react-hook-form';

function App() {
    const { register, handleSubmit, handleChange, values} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log(values.name)
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    label="Name"
                    type="text"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    {...register("name")}
                />
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}

export default App;
