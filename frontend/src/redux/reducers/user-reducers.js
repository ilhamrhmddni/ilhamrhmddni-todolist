import axios from 'axios';

const initialState = {
	users: [],
	todos: [],
	isLoading: false,
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'START_FETCHING':
			return {
				...state,
				isLoading: true,
			};
		case 'SUCCES_GET_USER':
			return {
				...state,
				isLoading: false,
				todos: action.payload,
			};
		default:
			return {
				state,
			};
	}
}

export function 

export default userReducer;
