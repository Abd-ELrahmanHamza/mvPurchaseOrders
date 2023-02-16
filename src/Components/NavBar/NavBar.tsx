// Import bootstrap components
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// Import styled components
import { NavbarBrand, StyledNavbar } from "./NavBar.styled";

function NavBar() {
  return (
    <StyledNavbar bg="light" expand="sm" id="home">
      <Container>
        <NavbarBrand>
          Shop <sub>RA</sub>
        </NavbarBrand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}

export default NavBar;
