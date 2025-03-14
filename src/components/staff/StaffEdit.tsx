import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
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
    show: boolean;
    selectedRow: Staff | null;
    update : (staff :Staff)=> Promise<void>
    handelUpdateState : (staff :Staff)=> void
}

export const StaffEdit = ({ show, selectedRow, update, handelUpdateState}: Pops) => {

    const [staff, setStaff] = useState<Staff>(
        {
            staffId: " ",
            firstName: " ",
            lastName: " ",
            email: " ",
            role: " "
        }
    );

    useEffect(() => {
        if (selectedRow !== null) {
            setStaff(selectedRow);
        }
    }, [selectedRow])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStaff({ ...staff, [e.target.name] : [e.target.value] });
    }

    const handleUpdate = async()=> {
        try {
            await update(staff);
            handelUpdateState(staff);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Staff Edit Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Staff ID"
                        >
                            <Form.Control
                                type="text"
                                name="staffId"
                                value={staff.staffId}
                                readOnly
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                        >
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={staff.firstName}
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
                                value={staff.lastName}
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
                                value={staff.email}
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
                                value={staff.role}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary"> Close</Button>
                    <Button variant="primary"
                        onClick={handleUpdate}
                    > Update</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}