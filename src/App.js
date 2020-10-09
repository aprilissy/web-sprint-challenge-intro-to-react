import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'

const StyledHeader = styled.div`
  margin:2% 35%;
  padding:1% 3% 3%;
  border:1px solid black;
  background-color:rgba(224,224,224,0.3);
`

// Try to think through what state you'll need for this app before starting. Then build out
// the state properties here.

// Fetch characters from the API in an effect hook. Remember, anytime you have a 
// side effect in a component, you want to think about which state and/or props it should
// sync up with, if any.

const App = () => {
  const [starData, setStarData] = useState([])

  useEffect(() => {
    const fetchStarData = () => {
      axios.get(`https://swapi.dev/api/people/`)
        .then(res => {
          setStarData(res.data.results)
          //console.log("fetchStarData -> res.data.results", res.data.results)
        })
        .catch(err => {
          debugger
        })
    }
    fetchStarData()
  }, [])
  console.log('starData', starData)

  return (
    <StyledHeader className="App">
      <h1 className="Header">Characters</h1>
      {
        starData.map(ch => {
          return <Character info={ch} key={ch.name}></Character>
        })
      }
    </StyledHeader>
  );
}

export default App;
