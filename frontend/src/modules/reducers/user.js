const initialState = {
    user: {
        username: null,
    },
    error: false,
    errorMsg: '',
    loggedIn: false,
    loading: false,
}

const user = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USER_DONE':
        let user = action.user
            return {
                user: user,
                loggedIn: action.loggedIn,
                loading: false,
            }
        case 'LOGIN_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'REGISTER_USER_START':
            return {
                ...state,
                loading: true
            }
        case 'LOGIN_USER_ERROR':
            return {
                ...state,
                loading: false,
                loggedIn: false,
                error: true,
                errorMsg: action.error
            }
        case 'LOGOUT_USER':
            return {
                user: {},
                loggedIn: false,
                loading: false,
                loaded: true
            }
        default:
            return state
    }
}

export default user