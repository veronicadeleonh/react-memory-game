import React, {useState} from 'react'
import {useSelector, useDisptach} from "react-redux"

import {increaseScore, decreaseScore} from "../actions/index"

export default function ScoreCount() {

    const score = useSelector(state => state.score)
    const dispatch = useDisptach()

    return (
        <div>
            <h2>score: {score}</h2>
        </div>
    )
}
