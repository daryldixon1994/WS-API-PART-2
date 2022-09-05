const initialState = {
    posts: [],
};
const postReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case "GET-USERS-POST":
            return { ...state, posts: payload };
            break;

        default:
            return state;
            break;
    }
};

export default postReducer;
