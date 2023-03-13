import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../common/auth';
import { type Credentials } from '../common/types';
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

export const Login = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const initialValues: Credentials = { username: '', password: '' };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          await auth.authenticate(values);
          navigate('/');
        }}
      >
        <FormStyled>
          <Label>
            <span>Username</span>
            <Field name="username" type="text" />
          </Label>
          <Label>
            <span>Password</span>
            <Field name="password" type="password" />
          </Label>
          <button type="submit">Submit</button>
        </FormStyled>
      </Formik>
    </Container>
  );
};
