import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      setData(storedData);
    }
  }, []);

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  const handleSave = () => {
    localStorage.setItem('myData', data);
  };

  return (
    <div>
      <input type="text" value={data} onChange={handleInputChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default MyComponent;
