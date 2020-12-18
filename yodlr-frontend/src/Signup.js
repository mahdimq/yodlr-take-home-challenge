import React from 'react';
import { postUser } from './config';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Signup.css';

const Signup = () => {
	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validationSchema={Yup.object({
				firstName: Yup.string()
					.max(15, 'Must be 15 characters or less')
					.required('Required'),
				lastName: Yup.string()
					.max(20, 'Must be 20 characters or less')
					.required('Required'),
				email: Yup.string().email('Invalid email address').required('Required')
			})}
			onSubmit={async (values, { setSubmitting }) => {
				try {
					await postUser(values);
					setSubmitting(false);
				} catch (err) {
					console.error(err);
				}
			}}>
			<Form className='form'>
				<h2>PLEASE REGISTER</h2>

				<div className='input-group'>
					<label htmlFor='firstName'>First Name</label>
					<Field className='write' name='firstName' type='text' />
					<ErrorMessage name='firstName' />
				</div>

				<div className='input-group'>
					<label htmlFor='lastName'>Last Name</label>
					<Field className='write' name='lastName' type='text' />
					<ErrorMessage name='lastName' />
				</div>

				<div className='input-group'>
					<label htmlFor='email'>Email Address</label>
					<Field className='write' name='email' type='email' />
					<ErrorMessage name='email' />
				</div>

				<button className='btn submit' type='submit'>
					Submit
				</button>
			</Form>
		</Formik>
	);
};

export default Signup;
