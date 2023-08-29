import { useState } from "react";
import Modal from "./component/Modal";
import Main from "./pages/Main";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(1);
  console.log(selectedId);
  return (
    <div className="App">
      <Main setSelectedId={setSelectedId} setShowModal={setShowModal} />
      {showModal ? (
        <Modal setShowModal={setShowModal} selectedId={selectedId} />
      ) : null}
    </div>
  );
}

export default App;
