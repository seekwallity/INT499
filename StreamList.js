// src/components/StreamList.js
import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('User Input:', input);
    setInput(''); // Clear the input field
  };

  return (
    <div className="streamlist">
      <h2>Welcome to StreamList</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter a movie name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default StreamList;
