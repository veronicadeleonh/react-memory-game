const initialState = {
    round: 0,
    score: 0,
    question: null
}

export const roundState = (state, action) => {
    switch(action.type) {
        case "INCREMENT_ROUND":
            return {...state, round: state.round + 1}
        case "DECREMENT_ROUND":
            return {...state, round: state.round -1}
        default:
            return state
    }
}

export const scoreState = (state, action) => {
    switch(action.type) {
        case "INCREMENT_SCORE":
            return {...state, round: state.score + 1}
        case "DECREMENT_SCORE":
            return {...state, round: state.score -1}
        default:
            return state
    }
}

