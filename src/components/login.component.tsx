import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../services/auth.service';

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
});

const LoginComponent: React.FC = () => {
    const initialValues = {
        email: '',
        password: ''
    };

    const handleSubmit = (values: { email: string; password: string; }) => {
        AuthService.login(values.email, values.password)
            .then(() => {
                window.location.reload();
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={LoginSchema}>
        {({ isSubmitting }) => (
        <Form>
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
        <button type="submit" disabled={isSubmitting}>Log in</button>
        </Form>
)}
    </Formik>
);
};

export default LoginComponent;