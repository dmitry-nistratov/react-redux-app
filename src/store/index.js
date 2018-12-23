import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import randId from '../middlewares/randId'
import logger from '../middlewares/logger'
import api from '../middlewares/api'
import thunk from 'redux-thunk'

const enhancer = applyMiddleware(thunk, randId, api, logger)

const store = createStore(reducer, {}, enhancer)

// dev only
window.store = store

export default store