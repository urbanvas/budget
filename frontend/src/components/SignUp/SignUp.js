import React, { useState } from 'react';
import Input from '../Input/Input';
import Form from '../Form/Form';
import { connect } from 'react-redux';
import { createUser } from '../../actions/user/signupUser';
import { withRouter } from 'react-router-dom';

const SignUp = ({ createUser, history }) => {
	const [ username, setUsername ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		createUser({ username, email, password });
		history.push('/home');
	};
	return (
		<Form classes="signup" buttonText="Sign Up" handleSubmit={handleSubmit}>
			<Input
				attr="username"
				handleChange={setUsername}
				value={username}
				inputClassArr={[ 'input', 'is-danger', 'is-large' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="email"
				handleChange={setEmail}
				value={email}
				inputClassArr={[ 'input', 'is-danger', 'is-large' ]}
				labelClassArr={[ 'label' ]}
			/>
			<Input
				attr="password"
				handleChange={setPassword}
				value={password}
				inputClassArr={[ 'input', 'is-danger', 'is-large' ]}
				labelClassArr={[ 'label' ]}
			/>
		</Form>
	);
};

export default connect(null, { createUser })(withRouter(SignUp));
