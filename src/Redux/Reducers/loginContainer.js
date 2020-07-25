 import {CONTAINER_TOGGLE} from '../Actions/types'

 const initialState = {
     showingRegister: false
 }

 const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case CONTAINER_TOGGLE:
            return {...action.payload}
        default:
            return oldState
    }

 }

 export default reducer;