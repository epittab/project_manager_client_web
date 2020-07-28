import { LOGIN_FORM_CLEANUP, CHANGE_LOGIN_FORM } from '../Actions/types'

const initialState = {
    username: '',
    password: ''
}

const reducer = (oldState = initialState, action) => {
    
    switch (action.type) {
        case CHANGE_LOGIN_FORM:
            return {...oldState, ...action.payload}
        case LOGIN_FORM_CLEANUP:
                return initialState
        default:
            return oldState
    }

} 

export default reducer;