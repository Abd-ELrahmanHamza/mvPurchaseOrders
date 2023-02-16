// Import styled
import styled from "styled-components";

// Import bootstrap components
import { Accordion } from "react-bootstrap";

export const AccordionHeader = styled(Accordion.Header)`
  button {
    background-color: ${({ theme }) => theme.background.secondary} !important;
    color: ${({ theme }) => theme.text.primary} !important;
  }
`;

export const AccordionBody = styled(Accordion.Body)`
  background-color: ${({ theme }) => theme.text.secondary};
  overflow: auto;
`;
