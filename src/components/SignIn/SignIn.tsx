import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { createAccessToken } from '../../api/authApi';
import { useAppDispatch } from '../../store';
import classes from './SignIn.module.scss';

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          dispatch(createAccessToken(values)).then(() => {
            navigate('/');
          });
        }}
      >
        <Form className={classes.form}>
          <label className={classes.formLabel}>
            <span>Username</span>
            <Field className={classes.input} type="text" name="username" />
          </label>
          <label className={classes.formLabel}>
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
