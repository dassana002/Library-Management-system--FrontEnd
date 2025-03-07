import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

interface BookPops {
    show : boolean;
}

export const BookEdit = ({show} : BookPops)=> {

    return(
        <Modal show={show}  centered>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary"> Close </Button>
                <Button variant="primary"> Save </Button>
            </Modal.Footer>
      </Modal>     
    );
}