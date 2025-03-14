import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Staff {
    staffId: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
}
interface Pops {
    show :boolean;
    selectedRow :Staff | null;
}

export const StaffEdit = ({show, selectedRow} :Pops) => {
    return (
        <div>
            <Modal
                show = {show}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Staff Edit Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label> Staff ID</Form.Label>
                            <Form.Control 
                                type="test"
                                name="staffId"
                                value={selectedRow?.staffId}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> First Name </Form.Label>
                            <Form.Control 
                                type="test"
                                name="firstName"
                                value={selectedRow?.firstName}  
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Last Name </Form.Label>
                            <Form.Control 
                                type="test"
                                name="lastName"
                                value={selectedRow?.lastName} 
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Email </Form.Label>
                            <Form.Control 
                                type="test"  
                                name="email"
                                value={selectedRow?.email}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Role </Form.Label>
                            <Form.Control 
                                type="test" 
                                name="role" 
                                value={selectedRow?.role}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary"> Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}