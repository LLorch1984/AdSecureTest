import { combineReducers } from 'redux'
import { contributorsReducer as contributors } from './contributors'
import { commonReducer as loading } from './common'

const rootReducer = combineReducers({
    contributors,
    loading

})
export default rootReducer