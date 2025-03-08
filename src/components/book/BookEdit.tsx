import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

interface Book {
    bookId: string;
    title: string;
    publisher: string;
    ISBN: string;
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

    const [book , setBook] = useState<Book>(
        
        {
        bookId : "",
        title: "",
        publisher: "",
        ISBN: "",
        author: "",
        edition: "",
        price: 0,
        totalQty: 0,
        availableQty: 0
        }
    );

    useEffect(()=> {
        if (selectedRow) {
            setBook({...selectedRow});    //  spread operator {...selectedRow} , which creates a shallow copy of the selectedRow object.
        }
    },[selectedRow]);               // selected Row eka change unot UseEffect() method eka run wela state eka change weno

    const handleClose = ()=> {      // 01 . Parent Component eke handleOnClose() ekata call kranwa
        handleOnClose();
    }

    
    // grab the form input changes
    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=> {
        setBook({...book,[e.target.name] : e.target.value});
    }

    return (
        <Modal
            show={show}
            onHide={handleOnClose}
            centered>

            <Modal.Header closeButton>
                <Modal.Title>Update Book </Modal.Title>
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
                            placeholder="name@example.com" 
                            name = "bookId"
                            value={book.bookId}
                            readOnly           //Form eke TestField walata select krapu row eke id eka add kranwa saha readOnly kranwa
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"                           //Title
                    >
                        <Form.Control
                            type="textl"
                            placeholder="name@example.com" 
                            name="Title"
                            value={book.title}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Publisher"                       //Publisher
                    >
                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="Publisher"
                            value={book.publisher}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="ISBN"                            //ISBN
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="ISBN"
                            value={book.ISBN}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>


                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Author"                          //Author
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="Author"
                            value={book.author}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Edition"                         //Edition
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="Edition"
                            value={book.edition}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Price"                           //Price
                    >

                        <Form.Control
                            type="nuber"
                            placeholder="Password" 
                            name="Price"
                            value={book.price}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Total Qty"                       //Total Qty
                    >

                        <Form.Control
                            type="nuber"
                            placeholder="Password" 
                            name="Total Qty"
                            value={book.totalQty}
                            onChange={handleOnChange}
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Avl Qty"                         //Avl Qty
                    >

                        <Form.Control
                            type="nuber"
                            placeholder="Password" 
                            name="Avl Qty"
                            value={book.availableQty}
                            onChange={handleOnChange}
                            />
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