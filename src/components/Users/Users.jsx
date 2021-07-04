import React from 'react';
import s from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {

	getUsers = () => {
		if (this.props.users.length === 0) {
	/* 		props.setUsers([
				{ id: 1, followed:false, fullname: 'Dmitry K.', status: 'I am looking fort job', location: {city: 'Minsk', country: 'Belerus'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
				{ id: 2, followed:false, fullname: 'Svetlana D.', status: 'I am so pretty', location: {city: 'Kiev', country: 'Ukraine'}, photoUrl: 'https://avatarfiles.alphacoders.com/791/79102.png' },
				{ id: 3, followed:true, fullname: 'Sergei S.', status: 'I like football!!!', location: {city: 'Philadelphia', country: 'USA'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
				{ id: 4, followed:false, fullname: 'Andrew T.', status: 'I am free to help you to create good Video Production', location: {city: 'Bishkek', country: 'Kyrgyzstan'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
			]);
	 */	
			axios.get("https://social-network.samuraijs.com/api/1.0/users")
				.then(response => {
					//debugger;
					this.props.setUsers(response.data.items);
				});
		}
	}

	render() {
		return <div>
			<button onClick={this.getUsers}>Get Users</button>
			{
				this.props.users.map( u => <div key={u.id}>
					<span>
						<div>
							<img className={s.userPhoto} src={u.photos.small != null ? u.photos.small : userPhoto} />
						</div>
						<div>
							{ u.followed 
								? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
								: <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
							}
							
						</div>
					</span>
					<span>
						<span>
							<div>{u.name}</div>
							<div>{u.status}</div>
						</span>
						<span>
							<div>{"u.location.country"}</div>
							<div>{"u.location.city"}</div>
						</span>
					</span>
				</div> )
			}
		</div>
	}
}

export default Users;