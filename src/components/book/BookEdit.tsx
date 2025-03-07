import Button from "react-bootstrap/esm/Button";
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
    lastUpdatedDate: string; 
    lastUpdatedTime: string; 
}
interface BookPops {
    show : boolean;
    selectedRow : Book | null;
    handleOnClose : ()=> void ;    // Book component eken handleOnClose() fuction eka pass kragatta  , JS wala puluwan functions pass kranna
}


export const BookEdit = ({show , selectedRow , handleOnClose} : BookPops )=> {

    const handleClose = () =>{      // 01 . Parent Component eke handleOnClose() ekata call kranwa
        handleOnClose();
    }

    return(
        <Modal 
            show={show}
            onHide={handleOnClose}    
        centered>

            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}> Close </Button>
                <Button variant="primary"> Save </Button>
            </Modal.Footer>
      </Modal>     
    );
}