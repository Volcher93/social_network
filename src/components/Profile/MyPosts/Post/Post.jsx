import React from "react";
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src='https://api-private.atlassian.com/users/f3ba6e3feb7b6867012f05b2f873affb/avatar'/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;