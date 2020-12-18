import React from 'react';
import './Users.css';

const Users = ({ firstName, lastName, email, status, id }) => {
	return (
		<div className='users'>
			<h2>
				{firstName} {lastName}
			</h2>
			<p>Email: {email}</p>
			<p>Status: {status}</p>
			<hr />
		</div>
	);
};

export default Users;
