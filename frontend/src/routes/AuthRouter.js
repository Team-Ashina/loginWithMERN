import React, {Fragment} from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import { Login } from '../components/auth/Login';
import { Register } from '../components/auth/Register';

export const AuthRouter = () =>
{
	return (
		<Fragment>
			<div className="auth__container">
				<Switch>
					<Route exact path="/auth/login" component={ Login } />
					<Route exact path="/auth/register" component={ Register } />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Fragment>
	)
}
