import axios from "axios";
export const getUserPosts = (payload) => (dispatch) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts?userId=${payload}`)
        .then((response) =>
            dispatch({ type: "GET-USERS-POST", payload: response.data })
        )
        .catch((error) => console.log(error));
};
