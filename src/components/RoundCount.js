import React from 'react'
import {useSelector, useDispacth} from "react-redux"

import {incrementRound, decrementRound} from "../actions/index"

export default function RoundCount() {

    const round = useSelector(state => state.round)
    const dispacth = useDispatch()

    return (
        <div>
            {round}
        </div>
    )
}
