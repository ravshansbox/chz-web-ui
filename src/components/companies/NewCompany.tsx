import { Field, Formik } from 'formik';
import { type ComponentType } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { NewEntity, type Company } from '../../common/types';
import { Form } from '../core/Form';
import { Label } from '../core/Label';

export const NewCompany: ComponentType = () => {
  const queryClient = useQueryClient();
  const createCompany = useMutation({
    mutationFn: (body: { name: string }) => {
      return httpClient.fetch<Company>('/companies', { method: 'POST', body });
    },
    onSuccess: () => {
      return Promise.all([
        queryClient.invalidateQueries([QUERY_KEYS.COMPANIES]),
        queryClient.invalidateQueries([QUERY_KEYS.PERMISSIONS_COMPANIES]),
      ]);
    },
  });
  const navigate = useNavigate();

  const initialValues: NewEntity<Company> = { name: '' };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await createCompany.mutateAsync(values);
        navigate('/companies');
      }}
    >
      <Form autoComplete="off">
        <Label>
          <span>Name</span>
          <Field name="name" type="text" />
        </Label>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
