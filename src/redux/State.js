let rerenderEntireTree = () => {

};

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'It`s my first post', likesCount: 6},
            {id: 2, message: 'Hi, how are you?', likesCount: 1}
        ],
        newPostText: 'write new text here'
    },
    messagesPage: {
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
        ]
    },
    sidebar: {
        bFriends: [
            {name: 'Ben', src: "https://i.pinimg.com/736x/ae/ad/a1/aeada11ce3855393f3078033d4a7e2b7.jpg"},
            {name: 'Adgarh', src: "https://i.pinimg.com/736x/d2/e4/8e/d2e48ef2b1862bc5774c1ac51b00d0ff.jpg"},
            {name: 'Niko', src: "https://i1.sndcdn.com/avatars-000654084507-0m4lhd-t500x500.jpg"}
        ]
    }
}
export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = 'write new text here';
    rerenderEntireTree(state);
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}
export const subscribe = (observer) => {
rerenderEntireTree = observer;
}
export default state;