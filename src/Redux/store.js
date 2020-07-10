import {createStore} from 'redux'
import thunk from 'redux-thunk'

import reducer from './Reducers/root'

const middleware = [thunk];

const store = createStore(reducer)

export default store;