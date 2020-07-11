

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
        default:
            return oldState

    }
    
}

export default reducer;