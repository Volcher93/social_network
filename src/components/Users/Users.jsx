import React from "react";
import styles from "./users.module.css";

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoURL: 'https://i.pinimg.com/550x/8e/a9/44/8ea944581cb87dd9571b02b9f2d87f15.jpg',
                    followed: true,
                    fullName: 'Konstantine',
                    status: 'like beer',
                    location: {city: 'Krakow', country: 'Poland'}
                },
                {
                    id: 2,
                    photoURL: 'https://answers.ea.com/t5/image/serverpage/image-id/59356i97912F434F1FCEFE?v=v2',
                    followed: false,
                    fullName: 'Niko',
                    status: 'playing APEX',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoURL: 'https://avatarfiles.alphacoders.com/175/thumb-175704.jpg',
                    followed: true,
                    fullName: 'Denis',
                    status: 'survived 60 days',
                    location: {city: 'Minsk', country: 'Belarus'}
                }
            ]
        )
    }
    console.log(props.users.length);
    return <div>{
        props.users.map(u => <div key={u.id}>
            <div className={styles.user}>
                <div>
                    <img src={u.photoURL} className={styles.userPhoto}/>
                </div>
                <div className={styles.butt}>
                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{u.fullName}</div>
                    <div className={styles.userStatus}>{u.status}</div>
                    <div className={styles.userCountry}>{u.location.country}</div>
                    <div className={styles.userCity}>{u.location.city}</div>
                </div>
            </div>
        </div>)
    }
    </div>
}
export default Users;