import { TICKER_DETAILS } from './constants'

export function addTikerWidzetDetails(payload) {
    return {
        type: TICKER_DETAILS,
        payload,
    }
}

