import {combineReducers } from 'redux'
import authReducer from './authReducer'
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    authReducer,
    cartReducer
})
//test
export default rootReducer