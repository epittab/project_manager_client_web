import {TOGGLE_TASK_COSTS, CHANGE_TASK_BUDGET, SUBMIT_TASK_BUDGET, FETCH_TASK, TOGGLE_TASK_FORM, CHANGE_TASK_FORM, TASK_FORM_CLEANUP} from '../Actions/types'

const initialState = {
    tasks: [],
    isNewTaskOpen: false,
    newTaskForm: {
        task_name: '',
        task_description: '',
        task_start_date: '',
        task_end_date: '',
    },
    currTask: {
        isCostOpen: false,
        budget_amount: "0.00",
        task: '', 
        costs: [], 
        task_status: ''
    }
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {
        case TASK_FORM_CLEANUP:
            return {...oldState, newTaskForm: {...initialState.newTaskForm}}
        case CHANGE_TASK_FORM:
            return {...oldState, newTaskForm: {...oldState.newTaskForm, ...action.payload}}
        case FETCH_TASK:
            let {task, costs, task_status } = action.payload 
            return {...oldState, currTask: {...oldState.currTask, task, costs, task_status} }
        case TOGGLE_TASK_COSTS:
            return {...oldState, currTask: { ...oldState.currTask, isCostOpen: !oldState.isCostOpen}} 
        case TOGGLE_TASK_FORM:
            return {...oldState, isNewTaskOpen: !oldState.isNewTaskOpen} 
        case CHANGE_TASK_BUDGET:
            return {...oldState, currTask: { ...oldState.currTask, budget_amount: action.payload}}
        case SUBMIT_TASK_BUDGET:
            return {...oldState, budget_amount: !oldState.isCostOpen} 
        default:
            return oldState
    }
}

export default reducer;