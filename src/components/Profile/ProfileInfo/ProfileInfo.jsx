import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={s.profileHeader}>
				<img src='https://caribbeantrademarks.com/wp-content/uploads/2016/08/bg-beach.jpg' alt='content' />
			</div>
			<div className={s.profileDescription}>
				<div className={s.profilePhoto}>
					<img src={props.profile.photos.large} alt='profile picture' />
				</div>
				<div>
					<span className={s.fullName}>{props.profile.fullName}</span>
					<span className={s.aboutMe}>{props.profile.aboutMe}</span>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;