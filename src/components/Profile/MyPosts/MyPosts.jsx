import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	let posts = [
		{id: 1, message: 'Hi, how are you!', likesCount: 12},
		{id: 2, message: 'It is my first post', likesCount: 5},
	]

	return (
		<div className={s.postsBlock}>
			<h2>My posts</h2>
			<div className={s.newPost}>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
					<button>Remove</button>
				</div>
			</div>
			<div className={s.posts}>
				{
					posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
				}
			</div>
		</div>
	)
}

export default MyPosts;