// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'

const StyledCharacters = styled.div`
  margin:2% 0%;
  background-color:rgba(224,224,224,0.5);
  border:1px solid black;
  box-shadow: 2px 4px 10px;
h2{
    padding:0 3%;
}
  h2:hover{
    color:rgb(64,64,64);
  }
  #info {
    padding:2%;
  }
  p{
      font-weight:bold;
      text-transform: capitalize;
  }
`

function Character(props) {
    const { info } = props
    // console.log(info)

    const [chInfo, setChInfo] = useState(false)

    const toggleInfo = () => {
        setChInfo(!chInfo)
    }

    return (
        <StyledCharacters>
            <h2 onClick={(toggleInfo)}>{info.name}</h2>
            {chInfo && <div id='info'>
                <p>Birth Year: {info.birth_year}</p>
                <p>Gender: {info.gender}</p>
                <p>Eye Color: {info.eye_color}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </div>}

        </StyledCharacters>
    )
}

export default Character;