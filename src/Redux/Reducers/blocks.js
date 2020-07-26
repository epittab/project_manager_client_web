import { FETCH_BLOCK, TOGGLE_NEW_BLOCK, BLOCK_CLEANUP, BLOCK_FORM_CLEANUP, CHANGE_BLOCK_FORM, POST_TASK_FORM } from '../Actions/types'

const initialState = {
    currBlock: {},
    isNewBlockOpen: false,
    newBlockForm: {
        block_name: '',
        block_description: '',
    }
}

const reducer = (oldState = initialState, action) => {
    switch (action.type) {
        case POST_TASK_FORM:
            return {...oldState, currBlock: {...oldState.currBlock, tasks: [...oldState.currBlock.tasks, action.payload]}}
        case BLOCK_CLEANUP:
            return {...oldState, currBlock: {}}
        case CHANGE_BLOCK_FORM:
            return {...oldState, 
                    newBlockForm: {...oldState.newBlockForm, ...action.payload}}
        case BLOCK_FORM_CLEANUP:
            return {...oldState,
                    newBlockForm: {block_name: '', block_description: '',}}
        case TOGGLE_NEW_BLOCK:
            return {...oldState, isNewBlockOpen: !oldState.isNewBlockOpen }
        case FETCH_BLOCK:
            return {...oldState, currBlock: action.payload}
        default:
            return oldState
    }
} 

export default reducer;