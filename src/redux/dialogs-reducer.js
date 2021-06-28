const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
	dialogs: [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Anna'},
		{id: 3, name: 'Ivan'},
		{id: 4, name: 'Viktor'},
		{id: 5, name: 'Olya'},
		{id: 6, name: 'Andrew'},
	],
	messages: [
		{id: 1, message: 'Hi!'},
		{id: 2, message: 'How are you?'},
		{id: 3, message: 'Yo-o-o-o'},
		{id: 4, message: 'Yo'},
		{id: 5, message: 'What\'s up'},
		{id: 6, message: 'Relax'},
	],
	newMessageBody: ""
}
const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({id: 6, message: body});
			return state;
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) => ({
	type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export default dialogsReducer;