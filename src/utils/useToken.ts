import { useState } from 'react';

export default function useToken(): {
	setToken: Function,
	token: string
} {
	const getToken = () => {
		const tokenString = localStorage.getItem('token')
		if (tokenString) {
			const userToken = JSON.parse(tokenString)
			return userToken?.token
		} else return false
	}

	const [token, setToken] = useState(getToken())

	const saveToken = (userToken: {
		setToken: Function,
		token: string
	}) => {
		localStorage.setItem('token', JSON.stringify(userToken))
		setToken(userToken.token)
	}

	return {
		setToken: saveToken,
		token
	}
}