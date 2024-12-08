import React, { useState } from 'react';

function Form() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert(`Input Value: ${inputValue}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter text"
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
