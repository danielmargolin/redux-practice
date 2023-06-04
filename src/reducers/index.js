import { combineReducers } from 'redux'

import counterReducer from './counter.reducer'
// import ResetCounterReducer from './resetCounter.reducer'

const rootReducer = combineReducers({
    counter: counterReducer,
    // resetCounter: ResetCounterReducer
})

export default rootReducer;