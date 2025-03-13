import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

interface BookPops {
    // show :boolean;
    // bookDelete :()=> void 
}

export const BookDelete = ({} :BookPops )=> {
    
    const handelOndelete = ()=> {
        //bookDelete();
    }

    return(
        <div>
        <Modal>
            <Modal.Header closeButton>
            <Modal.Title> Delete Book</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <p>Are you sure you want to delete the book ?</p>
            </Modal.Body>

            <Modal.Footer>
            <Button variant="danger" onClick={handelOndelete}>Delete</Button>
            <Button variant="success">Close</Button>
            </Modal.Footer>
        </Modal>
    </div>
    );
}