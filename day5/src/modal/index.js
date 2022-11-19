import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BasicForm from '../form';


export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <BasicForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}



