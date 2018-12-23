import {combineReducers} from 'redux'
import counterReducer from './counter'
import articles from './articles'
import comments from './comments'
import changeColor from './change'

export default combineReducers({
    count: counterReducer,
    articles, comments,
    color: changeColor
})