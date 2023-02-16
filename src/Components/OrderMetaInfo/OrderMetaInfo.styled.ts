// Import styled
import styled from "styled-components";

// Import bootstrap components
import { ListGroup } from "react-bootstrap";

export const StyledListGroup = styled(ListGroup)`
  * {
    background-color: ${({ theme }) => theme.text.secondary} !important;
  }
`;

export const MetaTitle = styled.span`
  font-weight: bold;
`;
