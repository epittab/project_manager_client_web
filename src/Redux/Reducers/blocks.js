import { FETCH_BLOCK, TOGGLE_NEW_BLOCK } from '../Actions/types'

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
        case TOGGLE_NEW_BLOCK:
            return {...oldState, isNewBlockOpen: !oldState.isNewBlockOpen }
        case FETCH_BLOCK:
            return {...oldState}
        default:
            return oldState
    }
} 

export default reducer;