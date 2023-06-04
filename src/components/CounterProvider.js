// import { createContext, useReducer } from "react";
// import { initialState, reducer } from "../store";

// export const CounterContext = createContext(null)

// const CounterProvider = ({children}) => {
//     const [counter, dispatchForCounter] = useReducer(reducer, initialState);
//     // const [resetCounter, dispatchForResetCounter] = useReducer(resetCounterReducer, initialState);

//     const dispatch = (action) => {
//         dispatchForCounter(action)
//         dispatchForResetCounter(action)
//     }

//     const state = {
//         counter,
//         resetCounter
//     }

//     return <CounterContext.Provider value={{state, dispatch}}>{children}</CounterContext.Provider>
// }

// export default CounterProvider