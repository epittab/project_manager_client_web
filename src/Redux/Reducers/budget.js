

import { FETCH_BUDGET } from '../Actions/types'

const initialState = {
    budget: {
        total_budget: 0,
        budget_per_task: []
    }
}

const reducer = ( oldState = initialState, action ) => {

    switch (action.type) {
        case FETCH_BUDGET:
            return {...oldState, budget: action.payload}
        default:
            return oldState
    }
}

export default reducer;