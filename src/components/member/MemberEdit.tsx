import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";

interface Member {
    memberId: string;
    firstname: string;
    lastname: string;
    email: string;
    memberShipDate: Date;
}
interface MemberPops {
    show: boolean;
    selectedRow: Member | null;
}

export const MemberEdit = ({ show, selectedRow }: MemberPops) => {
    console.log(selectedRow);
    return (
        <div>
            <Modal
                show={show}>
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