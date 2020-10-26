import * as ActionTypes from './ActionTypes';

export const UserData = (state = {
	processing: false,
	username: '',
	loggedIn: !!localStorage.getItem('token')
}, action) => {
	switch (action.type) {
		case ActionTypes.UPDATE_USER_DATA:
			return {processing: false, username: action.payload, loggedIn: true}

		case ActionTypes.CLEAR_USER_DATA:
			return {processing: false, username: '', loggedIn:  false}

		case ActionTypes.USER_DATA_PROCESSING:
			return {...state, processing: true}

		default:
			return state;
	}
}