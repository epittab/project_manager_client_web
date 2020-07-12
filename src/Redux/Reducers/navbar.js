
const initialState = {
    isOpen: true
}

const reducer = (oldState = initialState, action) => {

    switch(action.type) {
        case 'TOGGLE_NAV': 
            return {...action.payload}
        default:
            return oldState
    }
}

export default reducer;