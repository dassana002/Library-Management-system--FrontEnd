import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Pops {
    show: boolean;
}

export const MemberAdd = ({ show }: Pops) => {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Add Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <FloatingLabel controlId="floatingInput" label="Member Id">
                        <Form.Control 
                            name="memberId" 
                            placeholder="Member Id" 
                            size="sm"
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingInput" label="First Name">
                        <Form.Control 
                            name="firstname" 
                            placeholder="First Name" 
                            size="sm" 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Last Name">
                        <Form.Control 
                            name="lastname" 
                            placeholder="Last Name" 
                            size="sm" 
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Email">
                        <Form.Control 
                            name="email" 
                            placeholder="Email" 
                            size="sm" 
                        />
                    </FloatingLabel>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}