import { FETCH_PROJECT_PERF } from '../Actions/performance'

const initialState = {
    currProjStat: {},
    generalStat: {
    }
}

const reducer = ( oldState = initialState, action ) => {

    switch( action.type ) {
        case FETCH_PROJECT_PERF:
            return { ...oldState, currProjStat: action.payload }
        default:
            return oldState
    }


} 

export default reducer