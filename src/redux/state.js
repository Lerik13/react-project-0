import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

// store - OOP
let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you!', likesCount: 12},
				{id: 2, message: 'It is my first post', likesCount: 5},
				{id: 3, message: 'Bla-bla', likesCount: 1},
				{id: 4, message: 'da-da', likesCount: 0}
			],
			newPostText: 'new post'
		},
		dialogsPage: {
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
		},
		sidebar: {
			friends: [
				{id: 1, name: 'Kolya'},
				{id: 2, name: 'Nastya'},
				{id: 3, name: 'Yana'},
				{id: 4, name: 'Stanislav'},
				{id: 5, name: 'Vova'},
			]
		}
	},
	_callSubscriber() {
		// заглушка = plug
		console.log('State was changed');
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {

		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);

		this._callSubscriber(this._state);
		
	}
}

export default store;
window.store = store;
