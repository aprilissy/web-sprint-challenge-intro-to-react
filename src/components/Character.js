// Write your Character component here
import React, { useState } from 'react'


function Character(props) {
    const { info } = props
    // console.log(info)

    const [chInfo, setChInfo] = useState(false)

    const toggleInfo = () => {
        setChInfo(!chInfo)
    }

    return (
        <div>
            <h2 onClick={(toggleInfo)}>{info.name}  +</h2>
            {chInfo && <div>
                <p>Birth Year: {info.birth_year}</p>
                <p>Gender: {info.gender}</p>
                <p>Eye Color: {info.eye_color}</p>
                <p>Hair Color: {info.hair_color}</p>
                <p>Height: {info.height}</p>
                <p>Mass: {info.mass}</p>
            </div>}

        </div>
    )
}

export default Character;