import React from 'react';
import { useHomeData } from './hooks/useHomeData';
import Users from './Users';
import { Link } from '@reach/router';
import './Admin.css';
// import UserInfo from './UserInfo';

const Admin = () => {
	const {
		state: { users },
		isLoading,
		error
	} = useHomeData();

	if (!users[0]) return <h1>Loading...</h1>;
	if (error) return <h1>Error.. Please return to home</h1>;

	return (
		<div className='admin'>
			{users.map((u) => (
				<Users
					key={u.id}
					firstName={u.firstName}
					lastName={u.lastName}
					email={u.email}
					status={u.state}
					id={u.id}
				/>
			))}
			{isLoading && <h1>Loading...</h1>}
		</div>
	);
};

export default Admin;
