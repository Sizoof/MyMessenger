import {combineReducers, legacy_createStore as createStore} from 'redux'
import authReduser from './redusers/authReduser'

let redusers = combineReducers({
    auth: authReduser
})


let store = createStore(redusers)

export default store;