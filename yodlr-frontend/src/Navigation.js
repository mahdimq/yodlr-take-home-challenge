import React from 'react';
import './Navigation.css';

import { Link } from '@reach/router';

function Navigation() {
	return (
		<nav>
			<div className='navigation'>
				<Link className='link' to='/users'>
					Admin
				</Link>
				<Link className='link' to='/signup'>
					Signup
				</Link>
			</div>
		</nav>
	);
}

export default Navigation;
