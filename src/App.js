import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar state={props.state.sidebar} />
			<div className='app-wrapper__content'>
				{/*
				<Route path="/dialogs" component={Dialogs} /> 
				<Route path="/profile" component={Profile} />
				*/}
				<Route path="/dialogs" 
					render={ () => <DialogsContainer /> }
				/> 
				<Route path="/profile" 
					render={ () => <ProfileContainer /> } 
				/>
				<Route path="/users" 
					render={ () => <UsersContainer /> } 
				/>
			</div>
		</div>
	);
}

export default App;
