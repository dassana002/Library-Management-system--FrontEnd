import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Pops {
    show :boolean;
    handleOnClose :()=> void;
}

export const BookAdd = ({show, handleOnClose} :Pops) => {
    return (
        <div>
            <Modal 
                show={show}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Books</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Title"
                            className="mb-3"
                        >
                            <Form.Control
                                type="textl"
                                placeholder="name@example.com"
                                name="title"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Publisher">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="publisher"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="ISBN">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="isbn"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Author">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="author"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Edition">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="edition"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Price">
                            <Form.Control
                                type="number"
                                placeholder="Password"
                                name="price"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Total Qty">
                            <Form.Control
                                type="nuber"
                                placeholder="Password"
                                name="totalQty"
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Avl Qty">
                            <Form.Control
                                type="number"
                                placeholder="Password"
                                name="avilableQty"
                            />
                        </FloatingLabel>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger"
                        onClick={handleOnClose}
                    >Close</Button>
                    <Button variant="success">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}