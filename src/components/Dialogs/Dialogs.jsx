import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{
					props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
				}
			</div>
			<div className={s.messages}>
				{
					props.messages.map(m => <Message message={m.message} id={m.id} />)
				}
			</div>
		</div>
	)
}

export default Dialogs;