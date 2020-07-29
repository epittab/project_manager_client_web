import { FETCH_USER_DETAILS, PATCH_USER_FORM, SUBMIT_USER, PATCH_USER_COST_FORM, SUBMIT_USER_COST, TOGGLE_USER, TOGGLE_USER_COST, CHANGE_USER, CHANGE_USER_COST, CLEANUP_USER, CLEANUP_USER_COST } from '../Actions/types'

const initialState = {
        cost: 0.00,
        form_cost: 0.00,
        first_name: '',
        last_name: '',
        username: '',
        form: {
            first_name: '',
            last_name: '',
            password: '',
            username: ''
        },
        isEditingUser: false,
        isEditingUserCost: false
}

const reducer = (oldState = initialState, action) => {

    switch(action.type){
        case PATCH_USER_COST_FORM:
            return {...oldState, cost: action.payload, isEditingUserCost: false}
        case CLEANUP_USER:
            return {...oldState, form: {...initialState.form}}
        case CLEANUP_USER_COST:
            return {...oldState, form_cost: initialState.form_cost}
        case TOGGLE_USER_COST:
            return {...oldState, isEditingUserCost: !oldState.isEditingUserCost}
        case TOGGLE_USER:
            return {...oldState, isEditingUser: !oldState.isEditingUser}
        case FETCH_USER_DETAILS:
            return {...oldState, first_name: action.payload.first_name, last_name: action.payload.last_name, username: action.payload.username, cost: action.payload.user_cost, form: {...oldState.form, first_name: action.payload.first_name, last_name: action.payload.last_name, username: action.payload.username} }
        case CHANGE_USER:
            return {...oldState, form: {...oldState.form, ...action.payload}}
        case CHANGE_USER_COST:
            return {...oldState, ...action.payload }
        default: 
            return oldState
    }
}

export default reducer;