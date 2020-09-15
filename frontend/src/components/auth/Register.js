import React, { Fragment } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import {Link} from 'react-router-dom';
// import { Link } from 'react-router-dom';

export const Register = () =>
{
	return (
		<Fragment>
			<div className="auth__form-container">
				<h2 className="auth__title">Sign in to your account</h2>
				<Form className="auth__form">

					<Form.Label>First Name</Form.Label>
					<InputGroup className="mb-4">

						<InputGroup.Prepend>
							<InputGroup.Text>FN</InputGroup.Text>
						</InputGroup.Prepend>

						<Form.Control
							required
							type="text"
							placeholder="Enter your first name"
						/>

					</InputGroup>

					<Form.Label>First Name</Form.Label>
					<InputGroup className="mb-4">

						<InputGroup.Prepend>
							<InputGroup.Text>LN</InputGroup.Text>
						</InputGroup.Prepend>

						<Form.Control
							required
							type="text"
							placeholder="Enter your last name"
						/>

					</InputGroup>

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
						Sign In
					</Button>
				</Form>
				<div className="auth__footer">
					Already have an account?
					<Link to="/auth/login">
						<span> Log In</span>
					</Link>
				</div>
			</div>
		</Fragment>
	)
}
