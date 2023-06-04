export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const increment = (incrementBy = 1) => {
    return {type: INCREMENT, payload: incrementBy}
}

export const decrement = (decrementBy = 1) => {
    return {type: DECREMENT, payload: decrementBy};
}

export const reset = () => {
    return {type: RESET};
}