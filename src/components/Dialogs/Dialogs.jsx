import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

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

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{
					dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
				}
			</div>
			<div className={s.messages}>
				{
					messages.map(m => <Message message={m.message} id={m.id} />)
				}
			</div>
		</div>
	)
}

export default Dialogs;