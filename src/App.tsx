import React,  {useState, useEffect}  from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./view/About";
import Home from "./view/home";
import Resume from "./view/resume";
import Myworks from "./view/myworks";
import Notfound from "./view/Notfound";
import {
  Modal,
  ModalBody,
  Container,
} from 'reactstrap';

export default function App() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!toggle)

  useEffect(() => {
    //functioon to startup modal
    setTimeout(() => {
      setModal(true)
    }, 60000);
    
  }, [])
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/aboutme">
            <About/>
          </Route>
          <Route exact path="/resume">
            <Resume/>
          </Route>
          <Route exact path="/myworks">
            <Myworks/>
          </Route>
          <Route exact path="/*">
            <Notfound/>
          </Route>
        </Switch>
      </div>
      
      <Modal c isOpen={modal} toggle={toggle}>
        <span style={{ float: 'right', marginLeft: 'auto', marginRight: '10px' }}>
          <i onClick={() => setModal(false)} className="fas fa-times"></i>
        </span>
        <ModalBody>
          <Container >
            <div className="modal-section">
              <h1>Hello there</h1>
              <p>If you want me to help you build something like this</p>
              <a href='https://wa.link/q1iwye' className="boxed-btn3">Message me</a>
            </div>
          </Container>
        </ModalBody>
      </Modal>
    </Router>
  );
}

