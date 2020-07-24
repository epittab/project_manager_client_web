function toggleNav() {
    return (dispatch, getState) => {
        //use getState
        let {isOpen} = getState().navbar
        dispatch({
            type: "TOGGLE_NAV",
            payload: !isOpen
        })

    }
}

export {toggleNav}