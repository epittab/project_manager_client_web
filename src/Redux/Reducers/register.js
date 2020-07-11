
const initialState = {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {

        case "REGISTER_FORM":
            return {...oldState, ...action.payload}
        case "REGISTER_FORM_CLEANUP":
            return initialState
        default:
            return oldState

    }
    
}

export default reducer;