import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

const App = () => {
  const [StarData, setStarData] = useState()

  useEffect(() => {
    const fetchStarData = () => {
      axios.get(``)
        .then(res => {
          setStarData(res.data)
        })
        .catch(err => {
          debugger
        })
    }
    fetchStarData()
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}

export default App;
