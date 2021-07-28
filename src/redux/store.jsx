import { createStore, combineReducers } from 'redux'
import { liveDetailsReducer } from './liveDetailsReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
    liveDetailsReducer,
})
export const store = createStore(
    rootReducer,
    composeWithDevTools()
    // other store enhancers if any
)
