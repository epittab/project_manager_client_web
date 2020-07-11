
const initialState = {
    username: '',
    password: ''
}

const reducer = (oldState = initialState, action) => {
    console.log('login')
    switch (action.type) {
        
        case "LOGIN_FORM":
            return {...oldState, ...action.payload}
        default:
            return oldState
    }

} 

export default reducer;