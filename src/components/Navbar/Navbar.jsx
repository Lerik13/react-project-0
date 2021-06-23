import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = (props) => {
	return (
		<div className={s.sidebar}>
			<nav className={s.nav}>
				<div className={`${s.item}`}>
					<NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
				</div>
				<div className={s.item}>
					<NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
				</div>
			</nav>
			<h3>Friends</h3>
			<ul className={s.friends}>
				{
					props.state.friends.map(friend => (
						<li>{friend.name}</li>
					))
				}
			</ul>
		</div>
	)
}

export default Navbar;