import React, { Fragment } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Login = () =>
{
	return (
		<Fragment>
			<div className="auth__form-container">
				<h2 className="auth__title">Log in to your account</h2>
				<Form className="auth__form">
					<Form.Label>Email address</Form.Label>
					<InputGroup className="mb-4">

						<InputGroup.Prepend>
							<InputGroup.Text>@</InputGroup.Text>
						</InputGroup.Prepend>

                        <Form.Control 
                            required
							type="email"
							placeholder="Email address"
						/>

					</InputGroup>

					<Form.Label>Password</Form.Label>
					<InputGroup className="mb-2">

						<InputGroup.Prepend>
							<InputGroup.Text>Æ</InputGroup.Text>
						</InputGroup.Prepend>

                        <Form.Control 
                            required
							type="password"
							placeholder="Password"
						/>

					</InputGroup>

					<Button className="btn-action" type="submit">
						Log In
					</Button>
				</Form>
				<div className="auth__footer">
                    You do haven't an account?
					<Link to="/auth/register">
						<span> Sign in</span>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}