import { Field, Form as FormCore, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { createCompany } from '../../api/companyApi';
import { Label } from '../core/Label';

const Form = styled(FormCore)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const NewCompany: ComponentType = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        await createCompany(values);
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
