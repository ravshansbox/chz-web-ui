import { Field, Form, Formik } from 'formik';
import { ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCompany } from '../../api/companyApi';
import { URLs } from '../../constants';
import { useAppDispatch } from '../../store';
import { Label } from '../core/Label';

export const NewCompany: ComponentType = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={async (values) => {
        await dispatch(createCompany(values));
        navigate(URLs.companies);
      }}
    >
      <Form autoComplete="off">
        <Label>
          <Field name="name" type="text" />
        </Label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
