let ADD_POST = 'ADD-POST';
let UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


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
				{id: 6, message: 'Hello'},
			]
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
	_addPost() {
		//debugger;
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		}
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	// Синхронизация данных, при каждом изменении -> меняется State
	_updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			this._addPost();
		} 
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._updateNewPostText(action.newText)
		}
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostTextActionCreator = (text) => ({
	type: UPDATE_NEW_POST_TEXT, newText: text
})

export default store;
window.store = store;
