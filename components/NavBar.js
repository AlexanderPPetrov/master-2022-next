import {
    Navbar, 
    Container,
    Nav,
} from "react-bootstrap";

import ActiveLink from "./ActiveLink";

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <ActiveLink activeClassName="active" href="/">
                        <a className="nav-link">Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/forecast">
                        <a className="nav-link">Прогноза за времето</a>
                    </ActiveLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;