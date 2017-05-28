// There are three possible states for our login
// process and we need actions for each of them
export const LOGIN_CHECK = 'LOGIN_CHECK'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGGED_IN = 'LOGGED_IN'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const UN_AUTHED = 'UN_AUTHED'

export function requestLogin() {
	return {
		type: LOGIN_REQUEST,
		isFetching: true,
		isAuthenticated: false
	}
}

function receiveLogin(user) {
	return {
		type: LOGGED_IN,
		isFetching: false,
		isAuthenticated: true
	}
}

function loginError(message) {
	return {
		type: LOGIN_FAILURE,
		isFetching: false,
		isAuthenticated: false,
		message
	}
}

export function CheckLogin () {
	return {
		type: LOGIN_CHECK
	}
}

export function submitLogin (creds) {
	if(creds.email !== "" && creds.pw !== ""){
		localStorage.setItem('LOGGED_IN', true);
		return receiveLogin();
	}else{
		return loginError();
	}
	
}