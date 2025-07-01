import React, { useState } from 'react';

import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginThunkCreator } from '../../store/reducers/loginReduser';
import LoginSchema from '../../YUP.JS';

import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";

import styles from './Login.module.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch();

    const login = (values) => {
        dispatch(loginThunkCreator(values));
    };

    return (
        <div className={styles.Login}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => login(values)}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className={styles.fieldContainer}>
                            <Field
                                name="email"
                                placeholder="Email"
                                type="email"
                                className={styles.inputField}
                            />
                            {errors.email && touched.email && (
                                <div className={styles.error}>{errors.email}</div>
                            )}
                        </div>

                        <div className={styles.fieldContainer}>
                            <Field
                                name="password"
                                placeholder="Password"
                                type={showPassword ? 'text' : 'password'}
                                className={styles.inputField}
                            />
                            <button
                                type='button'
                                className={`${styles.bttn} ${showPassword ? styles.toggled : ''}`}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline style={{ color: ' #6a11cb' }} />}
                            </button>
                            {errors.password && touched.password && (
                                <div className={styles.error}>{errors.password}</div>
                            )}
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;