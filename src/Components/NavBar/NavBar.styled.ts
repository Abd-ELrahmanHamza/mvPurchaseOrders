import styled from "styled-components";

// Import Bootstrap components
import Navbar from "react-bootstrap/Navbar";


export const NavbarBrand = styled(Navbar.Brand)`
  color: ${({ theme }) => theme.text.primary};
  font-size: 2rem;
  font-weight: 600;
`;
export const StyledNavbar = styled(Navbar)`
  background-color:${({ theme }) => theme.background.secondary} !important;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;
