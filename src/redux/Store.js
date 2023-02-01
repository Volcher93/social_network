//CONST
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

//STORE
let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'It`s my first post', likesCount: 6},
                {id: 2, message: 'Hi, how are you?', likesCount: 1}
            ],
            newPostText: 'write new text here'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Ben'},
                {id: 2, name: 'Nuke'},
                {id: 3, name: 'Adgarh'},
                {id: 4, name: 'Niko'},
                {id: 5, name: 'Greenleaf'},
                {id: 6, name: 'Frost'}
            ],
            messages: [
                {id: 1, message: 'Hello'},
                {id: 2, message: 'When will we go hiking?'},
                {id: 3, message: 'We will go to Naroch?'}
            ],
            newMessageBody: ""
        },
        sidebar: {
            bFriends: [
                {name: 'Ben', src: "https://i.pinimg.com/736x/ae/ad/a1/aeada11ce3855393f3078033d4a7e2b7.jpg"},
                {name: 'Adgarh', src: "https://i.pinimg.com/736x/d2/e4/8e/d2e48ef2b1862bc5774c1ac51b00d0ff.jpg"},
                {name: 'Niko', src: "https://i1.sndcdn.com/avatars-000654084507-0m4lhd-t500x500.jpg"}
            ]
        }
    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: text})

window.state = store;
export default store;