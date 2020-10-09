// Write your Character component here
import React, { useState } from 'react'


function Character(props) {
    const { info } = props
    // console.log(info)

    const [chInfo, setChInfo] = useState(null)

    const openInfo = name => {
        setChInfo(name)
    }
    const closeInfo = () => {
        setChInfo(null)
    }

    return (
        <div>

        </div>
    )
}

export default Character;