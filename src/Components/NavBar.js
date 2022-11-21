import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";

function NavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Diler Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="">
              <Nav.Link>Ana Sayfa</Nav.Link>
            </LinkContainer>

            <LinkContainer to="about">
              <Nav.Link>Hakkında</Nav.Link>
            </LinkContainer>

            <NavDropdown title="İşlemler" id="basic-nav-dropdown">
              <LinkContainer to="action/3.1">
                <NavDropdown.Item>Yeni çalışan ekle</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="action/3.2">
                <NavDropdown.Item>Bir çalışan sil</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="action/3.3">
                <NavDropdown.Item>Sicile göre rapor göster</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />
              <LinkContainer to="action/3.4">
                <NavDropdown.Item>Bütün raporları göster</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
