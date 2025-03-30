import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router';

export const NavBar = () => {
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/book">Book</Nav.Link>
                        <Nav.Link as={NavLink} to="/staff">Staff</Nav.Link>
                        <Nav.Link as={NavLink} to="/members">Members</Nav.Link>
                        <Nav.Link as={NavLink} to="/lending">Lendings</Nav.Link>
                        <Nav.Link as={NavLink} to="/signin">SignIn</Nav.Link>
                        <Nav.Link as={NavLink} to="/signup">SignUp</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}