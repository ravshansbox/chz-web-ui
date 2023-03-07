import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createAccessToken } from '../api/authApi';
import { URLs } from '../constants';
import { useAppDispatch } from '../store';
import { Label } from './core/Label';

const Container = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const FormStyled = styled(Form)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  marginBlockStart: '64px',
  width: '100%',
  '@media (min-width: 768px)': {
    width: '360px',
  },
  '@media (min-width: 1366px)': {
    width: '480px',
  },
});

export const SignIn = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => {
          dispatch(createAccessToken(values)).then(() => {
            navigate(URLs.root);
          });
        }}
      >
        <FormStyled>
          <Label>
            <span>Username</span>
            <Field type="text" name="username" />
          </Label>
          <Label>
            <span>Password</span>
            <Field type="password" name="password" />
          </Label>
          <button type="submit">Submit</button>
        </FormStyled>
      </Formik>
    </Container>
  );
};
