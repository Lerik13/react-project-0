import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	//debugger

	return (
		<div className={s.item}>
			<img src='./img/avatar.jpg' alt='avatar' />
			<div>
				<span>{props.message}</span>
			</div>
		</div>
	)
}

export default Post;