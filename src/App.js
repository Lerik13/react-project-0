import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer />
			<Navbar state={props.state.sidebar} />
			<div className='app-wrapper__content'>
				{/*
				<Route path="/dialogs" component={Dialogs} /> 
				<Route path="/profile" component={Profile} />
				*/}
				<Route path="/dialogs" 
					render={ () => <DialogsContainer /> }
				/> 
				<Route path="/profile/:userId?" 
					render={ () => <ProfileContainer /> } 
				/>
				<Route path="/users" 
					render={ () => <UsersContainer /> } 
				/>
				<Route path="/login" 
					render={ () => <Login /> } 
				/>
			</div>
		</div>
	);
}

export default App;
