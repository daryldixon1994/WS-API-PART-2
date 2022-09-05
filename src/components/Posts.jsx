import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserPosts } from "../redux/actions/postActions";
function Posts() {
    let { id } = useParams();
    let dispatch = useDispatch();
    // const [posts, setPosts] = useState([]);
    const { posts } = useSelector((state) => state);
    useEffect(() => {
        // axios
        //     .get(`https://jsonplaceholder.typicode.com/posts?userId=${payload}`)
        //     .then((response) =>
        //         setPosts(response.data)
        //     )
        //     .catch((error) => console.log(error));
        dispatch(getUserPosts(id));
    }, []);

    return (
        <div style={{ marginTop: "30px" }}>
            {posts &&
                posts.map((post) => {
                    return (
                        <article>
                            <h2 style={{ fontSize: "1.5em" }}>{post.title}</h2>
                            <h4 style={{ fontSize: "1.1em", color: "#0080a0" }}>
                                {post.body}
                            </h4>
                        </article>
                    );
                })}
        </div>
    );
}

export default Posts;
