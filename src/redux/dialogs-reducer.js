
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState =  {
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
};
const dialogsReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy={...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy={...state};
            stateCopy.messages={...state.messages};
            let body = stateCopy.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({id: 4, message: body});
            return stateCopy;
        }
        default:
            return state;
    }
}
export default dialogsReducer;