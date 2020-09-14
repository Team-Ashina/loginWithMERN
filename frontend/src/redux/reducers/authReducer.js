import { types } from '../types/types';

const initialState = {
	check : true
}

export const authReducer = ( state = initialState, action ) =>
{
	switch ( action.type )
	{
		case types.login:
			return {

				...state,
				...action.payload,
				check: false
			}

		case types.authLogout:

			return {
				check: false
			}
	
		default:
			return state;
	}
}