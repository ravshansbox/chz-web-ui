import { Field, Formik } from 'formik';
import { type ComponentType } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type Credentials, type User } from '../../common/types';
import { Form } from '../core/Form';
import { Label } from '../core/Label';

export const NewUser: ComponentType = () => {
  const queryClient = useQueryClient();
  const createUser = useMutation({
    mutationFn: (body: Credentials) => httpClient.fetch<User>('/users', { method: 'POST', body }),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.USERS]),
  });
  const navigate = useNavigate();

  const initialValues: Credentials = { username: '', password: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await createUser.mutateAsync(values);
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
