import React, { useEffect, useState } from "react";
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
    avilableQty: number;
    // lastUpdatedDate: string;
    // lastUpdatedTime: string;
}
interface BookPops {
    show : boolean;
    selectedRow : Book | null;
    handleOnClose : () => void;                             // 03.02. Book component eken handleOnClose() fuction eka pass kragatta  , JS wala puluwan functions pass kranna
      
}


export const BookEdit = ({ show, selectedRow, handleOnClose}: BookPops) => {
    

    const [book , setBook] = useState<Book>(
        {
         bookId: "",
         title: "",
         publisher: "",
         isbn: "",
         author: "",
         edition: "",
         price: 0,
         totalQty: 0,
         avilableQty: 0}
    );

    // BookEdit component load weddi eka ethulata select krapu book eka load kragatta , state eka change krala
    // select krapu book eka Load wenn one BookEdit component eka Mount wela time ekedi
    useEffect(()=> {
        if (selectedRow !== null) {
            setBook({...selectedRow});    // 02.01.02 spread operator {...selectedRow} , which creates a shallow copy of the selectedRow object.(row eke tiyeno okkoma data gann puluwan (...) operetor eken)
        }
    },[selectedRow]);               // 02.01.01 selected Row eka change unot UseEffect() method eka run wela state eka change weno


    // Input Field wala changes handle krann apita fuction ekk one (OnChange event ekk handle kragnn)
    // Change eka catch kragena e OnChange event eken apu values state ekat dala update krann one (ethakota tmi api type kraddi display wenne) 
    // grab the form input changes
    // 02.02
    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=> {    // e walin pennanne ,HTMl input element ekaka tiyena change ekk (Only Type script)
        setBook({...book , [e.target.name] : [e.target.value]});           // 02.02.01 [e.target.name] : [e.target.value] meken change wena input field eka catch karagnno
    }


    const handleClose = ()=> {      // 03.01 . Parent Component eke handleOnClose() ekata call kranwa
        handleOnClose();
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
                            value={book.bookId}                 // 02.01.03 Form eke Input Field eka ethulata Book Component eken apu bookID eka add kra
                            readOnly                            // Form eke Input Field walata select krapu row eke id eka add kranwa saha readOnly kranwa
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
                            value={book.title}                  // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.publisher}              // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="ISBN"                            //ISBN
                    >

                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="isbn"
                            value={book.isbn}                   // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.author}                 // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.edition}                // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.price}                  // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.totalQty}               // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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
                            value={book.avilableQty}            // 02.01.03
                            onChange={handleOnChange}           // 02.02.01
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

function UpdateBook() {
    throw new Error("Function not implemented.");
}
