import { Button } from "react-bootstrap";
import { useState } from "react";
import MyVerticallyCenteredModal from "./modal";

export default function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}