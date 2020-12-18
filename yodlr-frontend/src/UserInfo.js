import React, { useState, useEffect } from 'react';
import { getSingleUser } from './config';

function UserInfo({ id, firstName, lastName, email, status }) {
	const [setUserInfo] = useState({});

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				await getSingleUser(id).then((res) =>
					setUserInfo({
						id: res.id,
						firstName: res.firstName,
						lastName: res.lastName,
						email: res.email,
						status: res.state
					})
				);
			} catch (error) {
				console.error(error);
			}
		};
		fetchProfile();
	}, [id]);

	return (
		<div>
			<h2>
				{id}: {firstName} {lastName}
			</h2>
			<p>Email: {email}</p>
			<p>Status: {status}</p>
			<hr />
		</div>
	);
}

export default UserInfo;
