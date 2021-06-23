import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

let posts = [
	{id: 1, message: 'Hi, how are you!', likesCount: 12},
	{id: 2, message: 'It is my first post', likesCount: 5},
	{id: 3, message: 'Bla-bla', likesCount: 1},
	{id: 4, message: 'da-da', likesCount: 0}
]

let dialogs = [
	{id: 1, name: 'Dima'},
	{id: 2, name: 'Anna'},
	{id: 3, name: 'Ivan'},
	{id: 4, name: 'Viktor'},
	{id: 5, name: 'Olya'},
	{id: 6, name: 'Andrew'},
]
let messages = [
	{id: 1, message: 'Hi!'},
	{id: 2, message: 'How are you?'},
	{id: 3, message: 'Yo-o-o-o'},
	{id: 4, message: 'Yo'},
	{id: 5, message: 'What\'s up'},
	{id: 6, message: 'Hello'},
]

ReactDOM.render(
	<App posts={posts} dialogs={dialogs} messages={messages}/>,
	document.getElementById('root')
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
