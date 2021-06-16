import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div>
			<div className={s.profile__header}>
				<img src='img/bg-beach.jpg' alt='content' />
			</div>
			<div className={s.profile__avatar}>
				avatar + description
			</div>
			<MyPosts />
		</div>
	)
}

export default Profile;