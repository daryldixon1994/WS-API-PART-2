import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Profile = () => {
    const [userPost, setUserPost] = useState();
    let { id } = useParams();
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>
                setUserPost(response.data.find((post) => post.id == id))
            )
            .catch((error) => console.log(error));
    }, []);
    console.log(userPost);
    return (
        <div>
            {userPost ? (
                <article>
                    <h4>Post</h4>
                    <h2> {userPost.title} </h2>
                    <h3> {userPost.body} </h3>
                </article>
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    );
};

export default Profile;
