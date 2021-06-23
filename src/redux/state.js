let state = {
	profilePage: {
		posts: [
			{id: 1, message: 'Hi, how are you!', likesCount: 12},
			{id: 2, message: 'It is my first post', likesCount: 5},
			{id: 3, message: 'Bla-bla', likesCount: 1},
			{id: 4, message: 'da-da', likesCount: 0}
		]
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
}

export default state;