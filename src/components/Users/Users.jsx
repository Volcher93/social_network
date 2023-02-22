import React from "react";
import styles from "./users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div key={u.id}>
                    <div className={styles.user}>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}/>
                        </div>
                        <div className={styles.butt}>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                        <div className={styles.userInfo}>
                            <div className={styles.userName}>{u.name}</div>
                            <div className={styles.userStatus}>{u.status}</div>
                            <div className={styles.userCountry}>{"u.location.country"}</div>
                            <div className={styles.userCity}>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    }
}


export default Users;