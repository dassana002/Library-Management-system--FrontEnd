import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router";

export const Signup = ()=> {
    return(
        <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="border rounded p-5 shadow-lg bg-white" style={{ width: "450px" }}>
                
                <h3 className="text-center mb-4 fs-4">Sign Up</h3>
                
                <Form className="Signup-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="fs-5">First Name</Form.Label>
                        <Form.Control type="text" placeholder="First Name" size="sm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-5">Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Last Name" size="sm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-5">Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" size="sm" />
                        <Form.Text >We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-5">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="fs-5">Role</Form.Label>
                        <Form.Control type="text" placeholder="Role" size="sm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" className="fs-6" />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit" className="w-100 fs-5 p-2">Submit</Button>

                    <div className="text-center mt-4">
                        <p className="mb-0 fs-6">I have an account? <Link to="/signin">SignIn</Link></p>
                    </div>
                </Form>
            </div>
        </Container>
    );
}