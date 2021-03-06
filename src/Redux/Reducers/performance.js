import { FETCH_GENERAL_PERF, FETCH_PROJECT_PERF, FETCH_ALL_PROJECT_INDICATORS, GET_INDICATORS, GENERAL_CLEANUP } from '../Actions/types'

const initialState = {
    currProjStat: {},
    generalStat: {},
    allProjStats: [],
    loading: false
}

const reducer = ( oldState = initialState, action ) => {

    switch( action.type ) {
        case GENERAL_CLEANUP:
            return {...oldState, generalStat: initialState.generalStat}
        case FETCH_GENERAL_PERF:
            return {...oldState, generalStat: action.payload}
        case GET_INDICATORS:
            return { ...oldState, ...action.payload }
        case FETCH_PROJECT_PERF:
            return { ...oldState, loading: false, currProjStat: action.payload }
        case FETCH_ALL_PROJECT_INDICATORS:
            return { ...oldState, loading: false, allProjStats: action.payload }
        default:
            return oldState
    }


} 

export default reducer