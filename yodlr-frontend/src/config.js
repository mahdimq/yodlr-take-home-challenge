export const BASE_URL = 'http://localhost:3001/users';

export const getUsers = async () => {
	const res = await fetch(BASE_URL, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return res.json();
};

export const getSingleUser = async (id) => {
	const res = await fetch(`${BASE_URL}/${id}`, {
		method: 'GET',
		params: id,
		headers: {
			'Content-Type': 'application/json'
		}
	});
	return res.json();
};

export const postUser = async (data) => {
	const res = await fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});
	return res.json();
};
