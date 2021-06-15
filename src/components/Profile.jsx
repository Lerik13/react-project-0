import React from 'react';

const Profile = () => {
	return (
		<div className='content'>
			<div className='content__header'>
				<img src='img/bg-beach.jpg' alt='content' />
			</div>
			<div className='content__avatar'>
				avatar + description
			</div>
			<div className='content__posts'>
				My posts
				<div>
					New post
				</div>
			</div>
		</div>
	)
}

export default Profile;