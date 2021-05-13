import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Pagination from '@material-ui/lab/Pagination';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1``;

export const TextFieldComponent = styled(TextField) `
  width: 100%;
`

export const PaginationComponent = styled(Pagination) `
  display: flex;
  justify-content: center;
  margin-top: 30px;
`
