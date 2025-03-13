import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

interface MemberPops {
    show :boolean;
} 

export const MemberEdit = ({show} :MemberPops) => {
    return (
        <div>
            <Modal
                show ={show}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}