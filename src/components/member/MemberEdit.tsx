import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Member {
    memberId: string;
    firstname: string;
    lastname: string;
    email: string;
}
interface MemberPops {
    show: boolean;
    selectedRow: Member | null;
    handleOnClose: () => void;
}

export const MemberEdit = ({ show, selectedRow, handleOnClose }: MemberPops) => {

    const [member , setMember] = useState({
        memberId :" ",
        firstname :" ",
        lastname :" ",
        email :" "
    });

    useEffect(()=>{
        if (selectedRow !== null) {
            setMember({...selectedRow});
        }
    },[selectedRow])

    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=> {
        setMember({...member, [e.target.name]:[e.target.value]});
    }

    const handleClose = () => {
        handleOnClose();
    }

    return (
        <div>
            <Modal
                show={show}>
                <Modal.Header closeButton>
                    <Modal.Title> Member Edit Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Member Id"
                        >
                            <Form.Control
                                name="memberId"
                                value={member.memberId}    
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="First Name"
                        >
                            <Form.Control
                                name="firstname"
                                value={member.firstname}
                                onChange={handleOnChange} 
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Last Name"
                        >
                            <Form.Control
                                name="lastname"
                                value={member.lastname}
                                onChange={handleOnChange}     
                            />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingPassword"
                            label="Email"
                        >

                        <Form.Control 
                            name="email"
                            value={member.email}
                            onChange={handleOnChange} 
                        />
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