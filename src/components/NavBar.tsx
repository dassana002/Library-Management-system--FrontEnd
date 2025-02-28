import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () => {
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand href="#Navbar"> Library Managemet System </Navbar.Brand>
                <Nav className="navBar">
                    <Nav.Link href="#Book"> Book </Nav.Link>
                    <Nav.Link href="#Member"> Member </Nav.Link>
                    <Nav.Link href="#Lending"> Lending </Nav.Link>
                    <Nav.Link href="#Staff"> Staff </Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    );
}