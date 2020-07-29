import { FETCH_PROJECT_PERF, FETCH_ALL_PROJECT_INDICATORS } from '../Actions/types'

const initialState = {
    currProjStat: {},
    generalStat: {},
    allProjStats: []
}

const reducer = ( oldState = initialState, action ) => {

    switch( action.type ) {
        case FETCH_PROJECT_PERF:
            return { ...oldState, currProjStat: action.payload }
        case FETCH_ALL_PROJECT_INDICATORS:
            return { ...oldState, allProjStats: action.payload }
        default:
            return oldState
    }


} 

export default reducer