import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post'; 

const MyPosts = (props) => {

	let postsElements = 
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

	let newPostElement = React.createRef();

	let addPost = () => {
		props.dispatch(addPostActionCreator());
	}

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.dispatch(updateNewPostTextActionCreator(text))
	}

	return (
		<div className={s.postsBlock}>
			<h2>My posts</h2>
			<div className={s.newPost}>
				<div>
					<textarea ref={newPostElement} value={props.newPostText} onChange={ onPostChange } />
				</div>
				<div>
					<button onClick={ addPost }>Add Post</button>
				</div>
			</div>
			<div className={s.posts}>
				{ postsElements }
			</div>
		</div>
	)
}

export default MyPosts;