import * as ActionTypes from "./ActionTypes";
import {HOST} from "../shared/Host";
import {actions} from "react-redux-form";

export const signUp = (username, password) => (dispatch) => {
	dispatch({
		type: ActionTypes.USER_DATA_PROCESSING
	});
	const newUser = {
		username: username,
		password: password
	}
	return fetch(HOST + '/account/users/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(newUser),
		credentials: 'same-origin'
	})
		.then(response => {                         // when error is in response
			if (response.ok) return response;
			else {
				let error = new Error('Error ' + response.status + ': ' + response.statusText);
				error.response = response;
				throw error;
			}
		},
		error => {                                 // when don't get the response at all
			throw new Error(error.message);
		})
		.then(response => response.json())
		.then(response => {
			localStorage.setItem('token', response['token']);
			return response;
		})
		.then(response => dispatch(updateUserData(response["username"])))       // to put in database at client side after server side is successfully updated
		.catch(error => {
			if(!!error.response && error.response['status'] === 400)
				error.message = "USER ID ALREADY EXISTS";
			dispatch(logOut());
			alert('User could not be created\nError: '+error.message);
		});
}

export const logIn = (username, password) => (dispatch) => {
	dispatch({
		type: ActionTypes.USER_DATA_PROCESSING
	});
	const user = {
		username: username,
		password: password
	}
	return fetch(HOST + '/account/user-auth/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(user),
		credentials: 'same-origin'
	})
		.then(response => {                         // when error is in response
				if (response.ok) return response;
				else {
					let error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			error => {                                 // when don't get the response at all
				throw new Error(error.message);
			})
		.then(response => response.json())
		.then(response => {
			localStorage.setItem('token', response.token);
			return response["user"];
		})
		.then(response => dispatch(updateUserData(response["username"])))       // to put in database at client side after server side is successfully updated
		.catch(error => {
			if(!!error.response && error.response['status'] === 400)
				error.message = "WRONG CREDENTIALS";
			dispatch(logOut());
			alert('User could not be logged in\nError: '+error.message);
		});
}

export const verifyUser = (token) => (dispatch) => {
	dispatch({
		type: ActionTypes.USER_DATA_PROCESSING
	});
	return fetch(HOST + '/account/current-user/', {
		method: 'GET',
		headers: {
			'Authorization': 'JWT ' + token
		},
		credentials: 'same-origin'
	})
		.then(response => {                         // when error is in response
				if (response.ok) return response;
				else {
					let error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					throw error;
				}
			},
			error => {                                 // when don't get the response at all
				throw new Error(error.message);
			})
		.then(response => response.json())
		.then(response => dispatch(updateUserData(response["username"])))       // to put in database at client side after server side is successfully updated
		.catch(error => {
			dispatch(logOut());
			alert('You are logged out. Please Login Again');
		});
}

export const logOut = () => (dispatch) => {
	localStorage.removeItem('token');
	dispatch({
		type: ActionTypes.CLEAR_USER_DATA
	});
	dispatch(actions.reset('account'))
};

export const updateUserData = (username) => ({
	type: ActionTypes.UPDATE_USER_DATA,
	payload: username
})