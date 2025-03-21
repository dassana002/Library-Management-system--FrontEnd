import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Staff } from "./Staff";
import { useState } from "react";

interface Pops {
    show : boolean;

}

export const StaffAdd = ({show} :Pops) => {

    const [NewStaff , setNewStaff] = useState<Staff>(
        {
            staffId :"",
            firstName :"",
            lastName :"",
            email :"",
            role : ""
        }
    );
    const handleOnChange = ()=>{

    }

    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Form</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                         <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                        >
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={NewStaff.firstName}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Last Name"
                        >
                            <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={NewStaff.lastName}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Email"
                        >
                            <Form.Control
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={NewStaff.email}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>


                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Role"
                        >

                            <Form.Control
                                type="text"
                                name="role"
                                placeholder="Role"
                                value={NewStaff.role}
                                onChange={handleOnChange}
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