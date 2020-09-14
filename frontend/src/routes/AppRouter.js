import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { AuthRouter } from './AuthRouter';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

import { Dashboard } from '../components/main/Dashboard';

export const AppRouter = () =>
{
	// const [check, setCheck] = useState(true);
	const [isLogin, setIsLogin] = useState(false);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLogin } />
					<PrivateRoute exact path="/" component={ Dashboard } isAuthenticated={ isLogin } />

					<Redirect to="/auth/login" />
				</Switch>
			</div>
		</Router>
	)
}
