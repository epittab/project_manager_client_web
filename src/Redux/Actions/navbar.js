import { TOGGLE_NAV }  from './types'

function toggleNav() {
    return (dispatch, getState) => {
        dispatch({
            type: TOGGLE_NAV
        })

    }
}

export {toggleNav}