const REACT_APP_BASE_API_URL = process.env.REACT_APP_BASE_API_URL || '';

function handleErrors(response) {
	debugger
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}

function getValues() {
	return fetch(`${REACT_APP_BASE_API_URL}/api/values`)
		.then(handleErrors)
		.then(response => response.json())
		.catch(err => alert(err));
}

export default {
	getValues
};
