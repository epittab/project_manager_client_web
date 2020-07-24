
const initialState = {
    userProjects: []
}

const reducer = (oldState = initialState, action) => {

    switch (action.type) {

        case "FETCH_PROJECTS":
            return {...oldState, 
                userProjects: [...action.payload]}
        default:
            return oldState

    }
    
}

export default reducer;