import { LOGIN_SUCCESS, LOGIN_FAILURE, POST_LOGIN, LOGOUT } from '../Actions/types'

const initialState = {
    token: null,
    userName: null,
    error: null,
    loading: false
}

const reducer = (oldState = initialState, action) => {
    
    switch (action.type) {
        case POST_LOGIN:
            return {...oldState, loading: true}
        case LOGIN_SUCCESS:
            return {token: action.payload.token, userName: action.payload.first_name, error: null, loading: false}
        case LOGIN_FAILURE:
            return {...oldState, error: action.payload, loading: false}
        case LOGOUT:
            return {...initialState}
        default:
            return oldState
    }

} 

export default reducer;