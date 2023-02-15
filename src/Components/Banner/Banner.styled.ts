import styled from "styled-components";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export const StyledImage = styled(Image)`
  width: 50%;
  height: 100%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.background.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0;
  color: ${({ theme }) => theme.text.secondary};

  text-align: center;
  h1 {
    text-align: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0;
    padding-top: 1rem;
  }
`;

export const BuyButton = styled(Button)`
  color: ${({ theme }) => theme.text.secondary};
  background-color: ${({ theme }) => theme.text.primary};
  border-color: ${({ theme }) => theme.text.primary};
  font-size: 1.2rem;
  margin-top: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
  }

  &:active {
    background-color: ${({ theme }) => theme.background.secondary};
    color: ${({ theme }) => theme.text.primary};
  }
`;
