import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Members } from "./Member";

interface Pops {
    show :boolean;
    handleOnClose :()=> void;
    update :(newMember :Members)=> Promise<void>;
    handleAdd :(newMember :Members)=> void;
}

export const MemberAdd = ({ show, handleOnClose, update, handleAdd} :Pops) => {

    const [newMember, setNewMember] = useState<Members>(
        {
            memberId :"",
            firstname :"",
            lastname :"",
            email :""  
        }
    );

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name, value} = e.target;

        setNewMember((prev)=> (
            {...prev ,[name] : value}
        ));
    }

    const handleUpdate = async()=> {
        try {
            await update(newMember);
            handleAdd(newMember);
            handleOnClose();
        } catch (error) {
            console.error(error);
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
                    <Modal.Title> Add Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <Form>
                    <FloatingLabel controlId="floatingInput" label="First Name">
                        <Form.Control 
                            name="firstname" 
                            placeholder="First Name" 
                            size="sm" 
                            value={newMember.firstname}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Last Name">
                        <Form.Control 
                            name="lastname" 
                            placeholder="Last Name" 
                            size="sm" 
                            value={newMember.lastname}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Email">
                        <Form.Control 
                            name="email" 
                            placeholder="Email" 
                            size="sm" 
                            value={newMember.email}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>
                </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleOnClose}> Close</Button>
                    <Button variant="primary" onClick={handleUpdate}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}