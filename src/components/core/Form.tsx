import { Form as FormCore } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormCore)({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
