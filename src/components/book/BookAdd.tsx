import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";
import { Books } from "./Book";
import React, { useState } from "react";

interface Pops {
    show: boolean;
    handleOnClose: () => void;
    addbooks: (book: Books) => Promise<void>
    handleAdd :(newBook :Books) => void
}

export const BookAdd = ({ show, handleOnClose, addbooks ,handleAdd }: Pops) => {

    const [newBook, setNewBook] = useState<Books>(
        {
            bookId: "",
            title: "",
            publisher: "",
            isbn: "",
            author: "",
            edition: "",
            price: 0,
            totalQty: 0,
            avilableQty: 0
        }
    );

    const handleOnChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const {name , value}  = e.target ;
        setNewBook((prev)=>(
            {...prev ,[name] :value}
        )
        );
    }

    const handleSubmit= async()=> {
        try {
            await addbooks(newBook);
            handleAdd(newBook)
            handleOnClose();   
        } catch (err) {
            console.error(err);
            throw err ; 
        }
    }

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
                                value={newBook.title}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Publisher">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="publisher"
                                value={newBook.publisher}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="ISBN">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="isbn"
                                value={newBook.isbn}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Author">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="author"
                                value={newBook.author}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Edition">
                            <Form.Control
                                type="text"
                                placeholder="Password"
                                name="edition"
                                value={newBook.edition}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Price">
                            <Form.Control
                                type="number"
                                placeholder="Password"
                                name="price"
                                value={newBook.price}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Total Qty">
                            <Form.Control
                                type="nuber"
                                placeholder="Password"
                                name="totalQty"
                                value={newBook.totalQty}
                                onChange={handleOnChange}
                            />
                        </FloatingLabel>

                        <FloatingLabel controlId="floatingPassword" label="Avl Qty">
                            <Form.Control
                                type="number"
                                placeholder="Password"
                                name="avilableQty"
                                value={newBook.avilableQty}
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
                        onClick={handleSubmit}
                    >Submit</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}