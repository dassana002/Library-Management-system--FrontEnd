import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Lendings } from "./LendingEdit";

interface Pops {
    show :boolean;
    handleOnClose : ()=> void
}
export const LendingAdd  = ({show, handleOnClose} :Pops)=> {

    const [newLending, setNewLending] = useState<Lendings>(
        {
            lendingId: "",
            bookId: "",
            memberId: "",
            isActive: false,
            overDue: 0,
            fineAmount: 0
        }
    );

    const handleOnChange = ()=> {}

    return(
        <div>
        <Modal
            show={show}
        >
            <Modal.Header closeButton>
                <Modal.Title>Add Lending</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                     <FloatingLabel 
                     controlId="floatingPassword" 
                     label="Book ID">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="bookId"
                            value={newLending.bookId}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel 
                    controlId="floatingPassword" 
                    label="Member ID">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="memberId"
                            value={newLending.memberId}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Author">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="isActive"
                            value={newLending.isActive ? "true" : "false"}
                            onChange={handleOnChange}
                        />

                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Edition">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            name="edition"
                            value={newLending.overDue}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Price">
                        <Form.Control
                            type="number"
                            placeholder="Password"
                            name="price"
                            value={newLending.fineAmount}
                            onChange={handleOnChange}
                        />
                    </FloatingLabel>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger"
                    onClick={handleOnClose}
                >Close</Button>
                <Button variant="success"
                >Submit</Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}