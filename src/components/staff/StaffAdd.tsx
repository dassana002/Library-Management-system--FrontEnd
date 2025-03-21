import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Staff } from "./Staff";
import { useState } from "react";

interface Pops {
    show : boolean;
    handleOnClose :()=> void;
    update :(newStaff :Staff)=> Promise<void>;
    handleAdd :(newStaff :Staff)=> void;
}

export const StaffAdd = ({show, handleOnClose, update, handleAdd} :Pops) => {

    const [newStaff, setNewStaff] = useState<Staff>(
        {
            staffId :"",
            firstName :"",
            lastName :"",
            email :"",
            role : ""
        }
    );

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        
        setNewStaff((prev)=>
            ({...prev , [name]:value})
        );
    }

    const handleUpdate = async()=>{
        try {
            await update(newStaff);
            handleAdd(newStaff);
            handleOnClose();
        } catch (err) {
            console.error("err",err);
        }
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
                                value={newStaff.firstName}
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
                                value={newStaff.lastName}
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
                                value={newStaff.email}
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
                                value={newStaff.role}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>


                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOnClose}>Close</Button>
                    <Button variant="primary"onClick={handleUpdate}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}