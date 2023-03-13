import { Field, Formik } from 'formik';
import { type ComponentType } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../common/appStore';
import { QUERY_KEYS } from '../../common/constants';
import { httpClient } from '../../common/httpClient';
import { type NewEntity, type Product } from '../../common/types';
import { Form } from '../core/Form';
import { Label } from '../core/Label';

export const NewProduct: ComponentType = () => {
  const appStore = useAppStore();
  const queryClient = useQueryClient();
  const createProduct = useMutation({
    mutationFn: (body: NewEntity<Product>) =>
      httpClient.fetch<Product>('/products', { method: 'POST', body }),
    onSuccess: () => queryClient.invalidateQueries([QUERY_KEYS.PRODUCTS]),
  });
  const navigate = useNavigate();

  if (appStore.selectedCompany === null) {
    return null;
  }

  const initialValues: NewEntity<Product> = {
    company_id: appStore.selectedCompany.id,
    name: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        await createProduct.mutateAsync(values);
        navigate('/products');
      }}
    >
      <Form>
        <Label>
          <span>Name</span>
          <Field name="name" type="text" />
        </Label>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
