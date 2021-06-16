import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (
		<div className={s.posts}>
			<h2>My posts</h2>
			<div>
				<textarea></textarea>
				<button>Add Post</button>
				<button>Remove</button>
			</div>
			<Post message='Hi, how are you?' />
			<Post message='It is my first post' />
		</div>
	)
}

export default MyPosts;