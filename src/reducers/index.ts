import { combineReducers } from 'redux'
import { studentReducer } from './student'

export const AppReducer = combineReducers({
    student: studentReducer
})