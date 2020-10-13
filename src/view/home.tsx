import React, {useState, useEffect} from 'react';
import AboutMe from '../layers/AboutMe';
import Footer from '../layers/Footer';
import HeroThree from '../layers/HeroThree';
import HeroThreeB from '../layers/HeroThreeB';
import Herotwo from '../layers/herotwo';
import Homeslider from '../layers/homeslider';
import INavbar from '../layers/NavBar';
import {
  Modal,
  ModalBody,
  Container,
} from 'reactstrap';
export default function Home() {

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!toggle)

  const [modalPics, setModalPics] = useState(false);
  const togglePics = () => setModal(!togglePics)
  useEffect(() => {
    setTimeout(() => {
      setModal(true)
    }, 5000);
    
    setTimeout(() => {
      setModalPics(true)
    }, 10000)
  }, [])
  
  return (
    <>
      <INavbar/>
      <Homeslider />
      <Herotwo />
      <HeroThree />
      <HeroThreeB/>
      <AboutMe/>
      <Footer/>
      

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

      <Modal isOpen={modalPics} toggle={togglePics}>
        <span style={{ float: 'right', marginLeft: 'auto', marginRight: '10px' }}>
          <i onClick={() => setModalPics(false)} className="fas fa-times"></i>
        </span>
        <ModalBody>
          <Container >
            <div className="modal-section">
              <h1></h1>
              <p>Pictures on this website was taken by Tayo Itayemi, message if you like his job</p>
              <a href='https://wa.link/fm42a7' className="boxed-btn3">Message him</a>
            </div>
          </Container>
        </ModalBody>
      </Modal>
    </>
  )
}
