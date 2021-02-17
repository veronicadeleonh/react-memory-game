import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux"

import {increaseScore, decreaseScore} from "../actions/index"

export default function ScoreCount() {

    const score = useSelector(state => state.score)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>score: {score}</h2>
        </div>
    )
}
