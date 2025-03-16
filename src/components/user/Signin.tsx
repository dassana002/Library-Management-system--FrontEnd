import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router";
const SignIn = ()=> {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div className="border rounded p-5 shadow-lg bg-white" style={{ width: "450px" }}>
        <h3 className="text-center mb-4 fs-4">Sign In</h3>
        <Form className="Signin-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-5">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" size="lg" />
            <Form.Text className="text-muted fs-6">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" size="lg" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" className="fs-6" />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 fs-5 p-2">Submit</Button>

          {/* Footer with Sign-Up Link */}
          <div className="text-center mt-4">
            <p className="mb-0 fs-6">Don't have an account? <Link to="/signup">Sign Up</Link></p>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default SignIn;
