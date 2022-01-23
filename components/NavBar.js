import {
    Navbar, 
    Container,
    Nav,
} from "react-bootstrap";
import LanguageSwitch from "./LanguageSwitch"
import ActiveLink from "./ActiveLink";
import { useTranslation } from 'next-i18next'

function NavBar() {

    const { t } = useTranslation('navbar');

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <ActiveLink activeClassName="active" href="/">
                        <a className="nav-link">
                            {t('home')}
                        </a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/forecast">
                        <a className="nav-link">
                            {t('forecast')}
                        </a>
                    </ActiveLink>
                    <ActiveLink activeClassName="active" href="/movies">
                        <a className="nav-link">
                            {t('movies')}
                        </a>
                    </ActiveLink>
                </Nav>
                <LanguageSwitch/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;