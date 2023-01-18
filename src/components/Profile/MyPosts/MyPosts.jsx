import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts() {
    let posts = [
        {id: 1, message: 'It`s my first post', likesCount: 6},
        {id: 2, message: 'Hi, how are you?', likesCount: 1}
    ];

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;