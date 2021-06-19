import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
	return (
		<div>
			<div className={s.profileHeader}>
				<img src='img/bg-beach.jpg' alt='content' />
			</div>
			<div className={s.profileDescription}>
				avatar + description
			</div>
		</div>
	)
}

export default ProfileInfo;