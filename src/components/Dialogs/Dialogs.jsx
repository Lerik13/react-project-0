import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
	return (
		<div className={s.dialog +' '+ s.active}>
			<NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.message}>
			{props.message}
		</div>
	)
}

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogItem name="Dima" id="1" />
				<DialogItem name="Sveta" id="2" />
				<DialogItem name="Anna" id="3" />
				<DialogItem name="Olya" id="4" />
				<DialogItem name="Viktor" id="5" />
			</div>
			<div className={s.messages}>
				<Message message="Hi!" />
				<Message message="How are you?" />
				<Message message="Yo-o-o-o" />
			</div>
		</div>
	)
}

export default Dialogs;