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
}
interface BookPops {
    show : boolean;
    selectedRow : Book | null;
    handleOnClose : ()=> void;                                  // 03.02. Book component eken handleOnClose() fuction eka pass kragatta  , JS wala puluwan functions pass kranna
    updateBooks : (book :Book)=> Promise<void>;                 // 02.02  me fuction eken enne Promise axois object ekk
    handleUpdateState : (book :Book)=> void;                    // 02.03.03 update una book eka parent component ekata aran yano
}


export const BookEdit = ({ show, selectedRow , handleOnClose ,updateBooks ,handleUpdateState}: BookPops) => {

    // Component ekata data awata ,
    // Component eke State ekata Book Data ewith na,
    // eka nisa State ekk handle kragann one 
    const [book , setBook] = useState<Book>(
        {
         bookId : " ",
         title : " ",
         publisher : " ",
         isbn : " ",
         author : " ",
         edition : " ",
         price : 0,
         totalQty : 0,
         avilableQty : 0
        }
    );

    // BookEdit component load weddi eka ethulata select krapu book eka load kragatta , state eka change krala
    // select krapu book eka Load wenn one BookEdit component eka Mount wela time ekedi
    useEffect(()=> {
        if (selectedRow !== null) {
            setBook({...selectedRow});      // 02.01.02 Spread operator {...selectedRow} , which creates a shallow copy of the selectedRow object.(row eke tiyeno okkoma data gann puluwan (...) operetor eken)
        }
    },[selectedRow]);                       // 02.01.01 Book Component eken selectedRow ekak awoth withark,
                                            //  UseEffect() method eka run wela state eka change weno


    // 02.02.01                                        
    // Input Field wala changes handle krann apita fuction ekk one (OnChangeEvent ekk handle kragnn)
    // Change eka catch kragena e OnChange event eken apu values state ekat dala update krann one (ethakota tmi api type kraddi display wenne) 
    // grab the form input changes
    const handleOnChange = (e :React.ChangeEvent<HTMLInputElement>)=> {    // e walin pennanne ,HTMl input element ekaka tiyena change ekk (Only Type script)
        setBook({...book , [e.target.name] : e.target.value });           // 02.02.01 [e.target.name] : [e.target.value] meken change wena input field eka catch karagnno
    }

    const handleUpdate = async() => {           // 02.03.02 (async fuction ekk async fuction ekakinma call krann one)
        try {
            await updateBooks(book); 
            handleUpdateState(book);            // Parent Component eka update krann use karai
            handleClose();
        } catch (err) {
            console.error(err);
        }
    }

    const handleClose = ()=> {      // 03.01 . Parent Component eke handleOnClose() ekata call kranwa ,( Direct Call karannath puluwan )
        handleOnClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleOnClose}
            centered>

            <Modal.Header closeButton>
                <Modal.Title> Update Book </Modal.Title>
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
                            name = "bookId"                     // 02.01.03 select krapu row eke name eka input field ekata add kra
                            value={book.bookId}                 // 02.01.03 select krapu row eke value eka input field ekata add kra
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
                            name="title"
                            value={book.title}                  
                            onChange={handleOnChange}           // 02.02
                            />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingPassword"
                        label="Publisher"                       //Publisher
                    >
                        <Form.Control
                            type="text"
                            placeholder="Password" 
                            name="publisher"
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
                            name="isbn"
                            value={book.isbn}                   
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
                            name="author"
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
                            name="edition"
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
                            name="price"
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
                            name="totalQty"
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
                            name="avilableQty"
                            value={book.avilableQty}            
                            onChange={handleOnChange}           
                            />
                    </FloatingLabel>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}> Close </Button>

                {/* 02.03.01 */}
                <Button variant="success" onClick={handleUpdate}> Update </Button>            
            </Modal.Footer>
        </Modal>
    );
}

