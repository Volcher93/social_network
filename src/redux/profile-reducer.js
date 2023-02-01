const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState =  {
    posts: [
        {id: 1, message: 'It`s my first post', likesCount: 6},
        {id: 2, message: 'Hi, how are you?', likesCount: 1}
    ],
    newPostText: 'write new text here'
};
const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = 'write new text here';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}
export default profileReducer;