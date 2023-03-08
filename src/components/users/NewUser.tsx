import { Field, Form as FormCore, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createUser } from '../../api/userApi';
import { useAppDispatch } from '../../store';
import { Label } from '../core/Label';

const Form = styled(FormCore)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const NewUser: ComponentType = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      onSubmit={async (values) => {
        await dispatch(createUser(values));
        navigate('/users');
      }}
    >
      <Form autoComplete="off">
        <Label>
          <span>Username</span>
          <Field name="username" type="text" />
        </Label>
        <Label>
          <span>Password</span>
          <Field name="password" type="password" />
        </Label>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
