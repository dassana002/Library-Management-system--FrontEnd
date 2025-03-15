import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Members } from "../member/Member";
import { Books } from "../book/Book";

interface Lendings {
    lendingId: string;
    book: Books;
    member: Members;
    isActive: boolean;
    overDue: number;
    fineAmount: number;
}
interface Props {
    show :boolean;
    selectedRow :Lendings | null;
}

export const LendingEdit = ({ show, selectedRow }: Props) => {
    console.log(selectedRow)
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Lending Edit Form </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Lending ID</Form.Label>
                            <Form.Control 
                                type="text"
                                name="lendingId"    
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Book ID</Form.Label>
                            <Form.Control 
                                type="text"
                                name="bookId"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Member ID</Form.Label>
                            <Form.Control 
                                type="text"
                                name="memberId"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label> Is Active</Form.Label>
                            <Form.Control 
                                type="text"
                                name="isActive"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Over Due</Form.Label>
                            <Form.Control 
                                type="text"
                                name="overDue"
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Fine Amount</Form.Label>
                            <Form.Control 
                                type="text"
                                name="amount"    
                            />
                        </Form.Group>
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