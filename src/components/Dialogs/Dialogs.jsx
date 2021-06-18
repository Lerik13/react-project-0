import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<div className={s.dialog +' '+ s.active}>
					<NavLink to="/dialogs/1">Dima</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/2">Sveta</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/3">Anna</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/4">Alla</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/5">Ivan</NavLink>
				</div>
				<div className={s.dialog}>
					<NavLink to="/dialogs/6">Viktor</NavLink>
				</div>
			</div>
			<div className={s.messages}>
				<div className={s.message}>
					Hi!
				</div>
				<div className={s.message}>
					How are you?
				</div>
				<div className={s.message}>
					Yo-o-o-o
				</div>
			</div>
		</div>
	)
}

export default Dialogs;