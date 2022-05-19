import {createStore} from "vuex"
import test from './modules/test.js'
import result from './modules/result.js'


const store = createStore({
    modules: {
        test,
        result
    },
    strict: process.env.NODE_ENV !== 'production'
})
export default store
