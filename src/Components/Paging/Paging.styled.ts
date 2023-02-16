import styled from "styled-components";

// Import bootstrap components
import { Pagination } from "react-bootstrap";

export const StyledPagination = styled(Pagination)`
  margin: 20px auto;
  a {
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
  }
  .active span {
    border-color: ${({ theme }) => theme.background.secondary};
    background-color: ${({ theme }) => theme.text.primary};
    color: ${({ theme }) => theme.background.secondary};
  }
`;
