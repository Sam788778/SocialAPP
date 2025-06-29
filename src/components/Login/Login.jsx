import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunkCreator } from '../../store/reducers/loginReduser';
import LoginSchema from '../../YUP.JS';
import styles from './Login.module.css';

const Login = () => {
    const dispatch = useDispatch();
    const captchaUrl = useSelector((state) => state.login.captchaURL);
    console.log(captchaUrl)

    const login = (values) => {
        dispatch(loginThunkCreator(values));
    };

    return (
        <div className={styles.Login}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    captcha: '',
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
                                type="password"
                                className={styles.inputField}
                            />
                            {errors.password && touched.password && (
                                <div className={styles.error}>{errors.password}</div>
                            )}
                        </div>
                        {captchaUrl && (
                            <div className={styles.fieldContainer}>
                                <img src={captchaUrl} alt="captcha" />
                                <Field
                                    name="captcha"
                                    className={styles.inputField}
                                />
                            </div>
                        )}

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