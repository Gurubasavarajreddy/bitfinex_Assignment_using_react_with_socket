import { TICKER_DETAILS } from './constants'
const initialState = {
    tickerDetails: [],
}

export function liveDetailsReducer(state = initialState, action) {
    switch (action.type) {
        case TICKER_DETAILS:
            return Object.assign({}, state, {
                tickerDetails: action.payload,
            })
        default:
            return state
    }
}
