import {TOGGLE_TASK_COSTS, CHANGE_TASK_BUDGET, SUBMIT_TASK_BUDGET, FETCH_TASK} from '../Actions/types'

const initialState = {
    isCostOpen: false,
    budget_amount: "0.00",
    task: '', 
    costs: [], 
    task_status: ''
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case FETCH_TASK:
            let {task, costs, task_status } = action.payload 
            return {...oldState, task, costs, task_status }
        case TOGGLE_TASK_COSTS:
            return {...oldState, isCostOpen: !oldState.isCostOpen} 
        case CHANGE_TASK_BUDGET:
            return {...oldState, budget_amount: action.payload} 
        case SUBMIT_TASK_BUDGET:
            return {...oldState, budget_amount: !oldState.isCostOpen} 
        default:
            return oldState
    }
}

export default reducer;