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
    handleOnClose : ()=> void ;
}


export const BookEdit = ({show , selectedRow , handleOnClose} : BookPops )=> {

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
                <Button variant="secondary" > Close </Button>
                <Button variant="primary"> Save </Button>
            </Modal.Footer>
      </Modal>     
    );
}