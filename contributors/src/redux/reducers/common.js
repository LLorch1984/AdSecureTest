import { types } from '../actions/actionTypes'
import initialState from '../reducers/initialState'

export function commonReducer(state = initialState, action) {
    debugger

    switch (action.type) {
        case types.commons.LOADING:
            return state + 1
        case types.commons.NO_LOADING:
            return state - 1
        default:
            return state
    }
}