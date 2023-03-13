import { Field, Formik } from 'formik';
import { type ComponentType } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type Customer, type NewEntity } from '../../common/types';
import { Form } from '../core/Form';
import { Label } from '../core/Label';

export const NewCustomer: ComponentType = () => {
  const appStore = useAppStore();
  const queryClient = useQueryClient();
  const createCustomer = useMutation({
    mutationFn: (body: { company_id: string; name: string }) =>
      httpClient.fetch<Customer>('/customers', { method: 'POST', body }),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.CUSTOMERS]),
  });
  const navigate = useNavigate();

  if (appStore.selectedCompany === null) {
    return null;
  }

  const initialValues: NewEntity<Customer> = {
    company_id: appStore.selectedCompany.id,
    name: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await createCustomer.mutateAsync(values);
        navigate('/customers');
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
