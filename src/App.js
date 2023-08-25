import { useState, useEffect } from 'react';
import './App.css';
import Header from '../src/components/Header.js';
import Card from '../src/components/Card.js';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const jData = await axios.get('https://www.reddit.com/r/reactjs.json');
    setData(jData.data.data.children);
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      <Header />
      <section className="cards">
       {
        data.map((child) => (
          <Card key={child.data.name} info={child.data} />
        ))
       }
      </section>
    </div>
  );
}

export default App;
