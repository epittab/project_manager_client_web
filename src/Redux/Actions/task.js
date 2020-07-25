import {TOGGLE_TASK_COSTS, CHANGE_TASK_BUDGET, SUBMIT_TASK_BUDGET} from './types'

function toggleTaskCosts() {
    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_TASK_COSTS
        })
    }
}

function changeTaskBudget(budget) {
    return (dispatch, getState) => {
        dispatch({
            type: CHANGE_TASK_BUDGET, 
            payload: budget
        })
    }
}

function submitTaskBudget() {
    return (dispatch, getState) => {
        let {budget} = getState().task
        dispatch({
            type: SUBMIT_TASK_BUDGET,
            payload: budget
        })

    }
}

export { toggleTaskCosts, changeTaskBudget, submitTaskBudget }