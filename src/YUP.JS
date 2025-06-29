import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('invalid email')
        .required('required filed'),
    password: Yup.string()
        .min(6, 'password must be at least 6 characters long')
        .required('required filed')
});

export default LoginSchema