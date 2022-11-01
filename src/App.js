import {Modal} from "./Components/Modal"
import './App.css';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
function App() {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div className="App">
      <div className="col"><h2>Upgrade Plan Modal Example</h2>
                <p>Click on the below buttons to launch <br></br> a upgrade plan example</p>
                <Button className="uplan" onClick={()=> setOpenModal(true)} >Upgrade Plan</Button></div>
                <Modal open={openModal} onClose={()=> setOpenModal(false)} />
    </div>
  );
}

export default App;
