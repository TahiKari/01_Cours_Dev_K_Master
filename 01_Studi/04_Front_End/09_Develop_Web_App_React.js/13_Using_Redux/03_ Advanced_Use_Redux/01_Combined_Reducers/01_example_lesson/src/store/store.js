import { createStore } from 'redux'
import { rootReducer } from '../reducers/reducers.js'
export const store = createStore(rootReducer)
