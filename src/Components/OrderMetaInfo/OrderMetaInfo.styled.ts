import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

export const StyledListGroup = styled(ListGroup)`
  * {
    background-color: ${({ theme }) => theme.text.secondary} !important;
  }
`;

export const MetaTitle = styled.span`
  font-weight: bold;
`;
