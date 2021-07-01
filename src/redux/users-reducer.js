const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

let initialState = {
	users: [/*
		{ id: 1, followed:false, fullname: 'Dmitry K.', status: 'I am looking fort job', location: {city: 'Minsk', country: 'Belerus'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
		{ id: 2, followed:false, fullname: 'Svetlana D.', status: 'I am so pretty', location: {city: 'Kiev', country: 'Ukraine'}, photoUrl: 'https://avatarfiles.alphacoders.com/791/79102.png' },
		{ id: 3, followed:true, fullname: 'Sergei S.', status: 'I like football!!!', location: {city: 'Philadelphia', country: 'USA'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
		{ id: 4, followed:false, fullname: 'Andrew T.', status: 'I am free to help you to create good Video Production', location: {city: 'Bishkek', country: 'Kyrgyzstan'}, photoUrl: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png' },
		*/
	]
};

const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case FOLLOW:
			return {
				...state, 
				users: state.users.map(u => { 
					if (u.id === action.userId)
						return {...u, followed: true}
					return u;
				})
			}
		case UNFOLLOW:
			return { 
				...state, 
				users: state.users.map(u => { 
					if (u.id === action.userId)
						return {...u, followed: false}
					return u;
				})
			}
		case SET_USERS:
			return { ...state, users: [ ...state.users, ...action.users] }
		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({ type: SET_USERS, users})

export default usersReducer;
