import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import React, { useEffect, useState } from "react";

export interface Lendings {
    lendingId: string;
    bookId: string;
    memberId: string;
    isActive: boolean;
    overDue: number;
    fineAmount: number;
}

interface Props {
    show: boolean;
    selectedRow: Lendings | null;
    handleOnClose: () => void;
    update: (lending: Lendings) => Promise<void>;
    handleUpdateState: (lending: Lendings) => void;
}

export const LendingEdit = ({ show, selectedRow, handleOnClose, update, handleUpdateState }: Props) => {
    const [lending, setLending] = useState<Lendings>({
        lendingId: "",
        bookId: "",
        memberId: "",
        isActive: false,
        overDue: 0,
        fineAmount: 0
    });

    useEffect(() => {
        if (selectedRow) {
            setLending({ ...selectedRow });
        }
    }, [selectedRow]);

    const handleOnChange = (e: React.ChangeEvent<any>) => {  
        const { name, type, value } = e.target;
    
        setLending((prevLending) => ({
            ...prevLending,
            [name]: 
                type === "number" ? (value ? Number(value) : 0) : 
                name === "isActive" ? value === "true" : value
        }));
    };
    

    const handleUpdate = async () => {
        try {
            
            await update(lending);
            handleUpdateState(lending);
            handleOnClose();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <Modal show={show} onHide={handleOnClose}>
            <Modal.Header closeButton>
                <Modal.Title>Lending Edit Form</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Lending ID</Form.Label>
                        <Form.Control type="text" name="lendingId" value={lending.lendingId} readOnly />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Book ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="bookId"
                            value={lending.bookId}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Member ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="memberId"
                            value={lending.memberId}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Is Active</Form.Label>
                        <Form.Select
                            name="isActive"
                            value={lending.isActive ? "true" : "false"}
                            onChange={handleOnChange}
                        >
                            <option value="true">Active</option>
                            <option value="false">Inactive</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Over Due</Form.Label>
                        <Form.Control
                            type="number"
                            name="overDue"
                            value={lending.overDue}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Fine Amount</Form.Label>
                        <Form.Control
                            type="number"
                            name="fineAmount"
                            value={lending.fineAmount}
                            onChange={handleOnChange}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleOnClose}>Close</Button>
                <Button variant="primary" onClick={handleUpdate}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
};
