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
  const [StarData, setStarData] = useState([])

  useEffect(() => {
    const fetchStarData = () => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          setStarData(res.data.results)
          console.log("fetchStarData -> res.data.results", res.data.results)
        })
        .catch(err => {
          debugger
        })
    }
    fetchStarData()
  }, [])
  console.log('StarData', StarData)


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character />
    </div>
  );
}

export default App;
