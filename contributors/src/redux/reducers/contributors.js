import { types } from '../actions/actionTypes'
import initialState from '../reducers/initialState'


export function contributorsReducer(state = initialState.contributors, action) {
    debugger
    switch (action.type) {
        case types.contributors.LOAD_CONTRIBUTORS_SUCCES:
            return state = action.contributors
        default:
            return state
    }
}