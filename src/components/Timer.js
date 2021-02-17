import React, {useState} from 'react'

export default function Timer() {

    const [seconds, setSeconds] = useState(30)

    return (
        <div>
            <h3>0:{seconds}</h3>
        </div>
    )
}
