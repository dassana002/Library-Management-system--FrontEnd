import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Book {
    bookId: string;
    title: string;
    publisher: string;
    isbn: string;
    author: string;
    edition: string;
    price: number;
    totalQty: number;
    availableQty: number;
    // lastUpdatedDate: string;
    // lastUpdatedTime: string;
}
interface BookPops {
    show: boolean;
    selectedRow: Book | null;
    handleOnClose: () => void;    // 02. Book component eken handleOnClose() fuction eka pass kragatta  , JS wala puluwan functions pass kranna
}


export const BookEdit = ({ show, selectedRow, handleOnClose }: BookPops) => {

    
    const handleClose = () => {      // 01 . Parent Component eke handleOnClose() ekata call kranwa
        handleOnClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleOnClose}
            centered>

            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                {/* Add a Form in Modal */}
                <Form>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Book Id"                         //Book ID
                    >
                        <Form.Control
                            type="text"
                            placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"                           //Title
                    >
                        <Form.Control
                            type="textl"
                            placeholder="name@example.com" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Publisher"                       //Publisher
                    >
                        <Form.Control
                            type="text"
                            placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="ISBN"                            //ISBN
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" />
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Author"                          //Author
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Edition"                         //Edition
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Price"                           //Price
                    >

                        <Form.Control
                            type="nuber"
                            placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Total Qty"                       //Total Qty
                    >

                        <Form.Control
                            type="nuber"
                            placeholder="Password" />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Avl Qty"                         //Avl Qty
                    >

                        <Form.Control
                            type="number"
                            placeholder="Password" />
                    </FloatingLabel>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Close </Button>
                <Button variant="primary"> Save </Button>
            </Modal.Footer>
        </Modal>
    );
}