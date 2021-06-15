import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.profile}>
			<div className={s.profile__header}>
				<img src='img/bg-beach.jpg' alt='content' />
			</div>
			<div className={s.profile__avatar}>
				avatar + description
			</div>
			<div className={s.posts}>
				<h2>My posts</h2>
				<div className={s.item}>
					post 1
				</div>
				<div className={s.item}>
					post 2
				</div>
			</div>
		</div>
	)
}

export default Profile;