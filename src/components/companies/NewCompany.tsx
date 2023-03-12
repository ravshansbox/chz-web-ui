import { Field, Form as FormCore, Formik } from 'formik';
import { type ComponentType } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { httpClient } from '../../common/httpClient';
import { type Company } from '../../common/types';
import { Label } from '../core/Label';

const Form = styled(FormCore)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const NewCompany: ComponentType = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const createCompany = useMutation({
    mutationFn: (body: { name: string }) =>
      httpClient.fetch<Company>('/companies', { method: 'POST', body }),
    onSuccess: () => queryClient.invalidateQueries(['companies']),
  });

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        await createCompany.mutateAsync(values);
        navigate('/companies');
      }}
    >
      <Form autoComplete="off">
        <Label>
          <Field name="name" type="text" />
        </Label>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
