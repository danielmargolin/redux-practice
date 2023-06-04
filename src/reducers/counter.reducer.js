import { handleAction } from "redux-actions";

import { INCREMENT, DECREMENT, RESET } from "../actions/counter.action";

export const initialState = 0

// const reducer = handleAction({
//     [INCREMENT]: (state, action) => {
//         return state + action.payload;
//     },
//     [DECREMENT]: (state, action) => {
//         return state - action.payload;
//     },
//     [RESET]: (state, action) => {
//         return initialState;
//     }
// }, initialState)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;
        case DECREMENT:
            return state - action.payload;
        case RESET:
            return initialState;
        default:
            return state;
    }
}

export default reducer;