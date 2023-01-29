import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createAccessToken } from './api';
import { authActions } from './authSlice';
import classes from './SignIn.module.scss';
import { useAppDispatch } from './store';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          dispatch(authActions.setIsAuthenticating(true));
          createAccessToken(values).then((accessToken) => {
            window.localStorage.setItem('ACCESS_TOKEN_ID', accessToken.id);
            dispatch(authActions.setIsAuthenticated(true));
            navigate('/');
          });
        }}
      >
        <Form className={classes.form}>
          <label>
            <span>Username</span>
            <Field className={classes.input} type="text" name="username" />
          </label>
          <label>
            <span>Password</span>
            <Field className={classes.input} type="password" name="password" />
          </label>
          <button className={classes.button} type="submit">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
