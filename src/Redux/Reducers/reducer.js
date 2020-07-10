

const initialState = {
    
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {

        case "TEST":
            return oldState
        default:
            return oldState

    }
    
}

export default reducer;