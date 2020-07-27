import {  COST_FORM_CLEANUP, CHANGE_COST_FORM } from '../Actions/types'

const initialState = {
    newCostForm: {
        cost_name: '',
        cost_description: '',
        cost_type: 'Labor',
        cost_amount: '',
    }
}

const reducer = ( oldState = initialState, action) => {

    switch (action.type) {
        case COST_FORM_CLEANUP:
            return {...initialState}
        case CHANGE_COST_FORM:
            return {...oldState, newCostForm: {...oldState.newCostForm, ...action.payload}}
        default:
            return oldState
    }

}

export default reducer;