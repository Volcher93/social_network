import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
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