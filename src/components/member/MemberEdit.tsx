import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Member {
    memberId: string;
    firstname: string;
    lastname: string;
    email: string;
    memberShipDate: Date;
}
interface MemberPops {
    show: boolean;
    selectedRow: Member | null;
    handleOnClose: () => void;
}

export const MemberEdit = ({ show, selectedRow, handleOnClose }: MemberPops) => {

    const handleClose = () => {
        handleOnClose();
    }

    return (
        <div>
            <Modal
                show={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Member Edit Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Member Id"
                        >
                            <Form.Control
                                type="text"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                        >
                            <Form.Control
                                type="textl"
                                placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Last Name"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Password" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Email Address"
                        >

                        <Form.Control
                                type="text"
                                placeholder="Password" />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"
                        onClick={handleClose}
                    >Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}