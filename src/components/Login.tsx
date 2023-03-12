import { Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../common/auth';
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
  const navigate = useNavigate();
  const auth = useAuth();

  return (
    <Container>
      <Formik
        initialValues={{ username: '', password: '' }}
        onSubmit={async (values) => {
          await auth.authenticate(values);
          navigate('/');
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
