import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div className={s.post}>
            <h3>MyPosts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.item}>
                <Post message='Hi, how are you?' likesCount='0'/>
                <Post message='It`s my first post' likesCount='6'/>
            </div>

        </div>
    )
}

export default MyPosts;