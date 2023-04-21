import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';

const RegisterSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Username must be at least 3 characters').required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const RegisterComponent: React.FC = () => {
    const initialValues = {
        username: '',
        email: '',
        password: ''
    };

    const handleSubmit = (values: { username: string; email: string; password: string; }) => {
        AuthService.register(values.username, values.email, values.password)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={RegisterSchema}>
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <Field type="text" id="username" name="username" required />
                        <ErrorMessage name="username" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" required />
                        <ErrorMessage name="email" />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" required />
                        <ErrorMessage name="password" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>Register</button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterComponent;