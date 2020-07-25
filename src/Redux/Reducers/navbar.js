import {TOGGLE_NAV} from '../Actions/types'

const initialState = {
    isOpen: true
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case TOGGLE_NAV: 
            return {isOpen: action.payload}
        default:
            return oldState
    }
}

export default reducer;