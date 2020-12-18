import { useState, useEffect } from 'react';
import { getUsers } from '../config';

export const useHomeData = () => {
	const [state, setState] = useState({ users: [] });
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	const fetchUsers = async () => {
		setIsLoading(true);
		try {
			await getUsers().then((res) => setState((prev) => ({ ...prev, users: [...res] })));
			setIsLoading(false);
		} catch (error) {
			setError(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return { state, isLoading, error };
};
