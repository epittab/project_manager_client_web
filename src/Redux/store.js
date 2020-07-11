import {createStore} from 'redux'
// import thunk from 'redux-thunk'

import rootReducer from './Reducers/root'

// const middleware = [thunk];

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;