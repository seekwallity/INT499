// src/components/StreamList.js
import React, { useState } from 'react';

function StreamList() {
    const [input, setInput] = useState('');
    const [submittedEvent, setSubmittedEvent] = useState(null);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedEvent(input);
        setInput(''); // Clear input field after submission
    };

    return (
        <div className="streamlist-container">
            <h1>Welcome to StreamList</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a movie or event"
                    value={input}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            {submittedEvent && <p>You submitted: {submittedEvent}</p>}
        </div>
    );
}

export default StreamList;