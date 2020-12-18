import React from 'react';
import { Router } from '@reach/router';
import './App.css';
import Navigation from './Navigation';
import Admin from './Admin';
import UserInfo from './Users';
import Error from './Error';
import Signup from './Signup';

function App() {
	return (
		<div className='App'>
			<Navigation />

			<Router>
				<Admin path='/users' />
				<Signup path='/signup' />
				<UserInfo path='/users/:id' />
				<Error default />
			</Router>
		</div>
	);
}

export default App;
