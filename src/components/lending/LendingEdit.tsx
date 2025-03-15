import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import React, { useEffect, useState } from "react";
import { Lendings } from "../types/LendingTypes";

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
        book: null,
        member: null,
        isActive: false,
        overDue: 0,
        fineAmount: 0
    });

    useEffect(() => {
        if (selectedRow) {
            setLending({ ...selectedRow });
        }
    }, [selectedRow]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;

        setLending(prevState => {
            if (name === "isActive") {
                return { ...prevState, isActive: checked };
            } else if (name === "bookId") {
                return prevState.book ? { ...prevState, book: { ...prevState.book, bookId: value } } : prevState;
            } else if (name === "memberId") {
                return prevState.member ? { ...prevState, member: { ...prevState.member, memberId: value } } : prevState;
            } else {
                return { ...prevState, [name]: value };
            }
        });
    };

    const handleUpdate = async () => {
        if (!lending.book || !lending.member) {
            console.error("Book or Member is null!");
            return;
        }
    
        try {
            await update(lending);
            handleUpdateState({
                ...lending,
                book: lending.book,
                member: lending.member
            });
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
                            value={lending.book ? lending.book.bookId : ""}
                            onChange={handleOnChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Member ID</Form.Label>
                        <Form.Control
                            type="text"
                            name="memberId"
                            value={lending.member ? lending.member.memberId : ""}
                            onChange={handleOnChange}
                        />
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

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            label="Is Active"
                            name="isActive"
                            checked={lending.isActive}
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
