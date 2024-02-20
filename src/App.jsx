import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return <ReviewList data={data} />;
}

export default App;
