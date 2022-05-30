import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Transition } from "react-transition-group";

import "./ReactTransitionGroup.css";

const Modal = (props) => {
  const duration = 300;

  const defaultStyle = {
    transition: `all ${duration}ms ease-in-out`,
    opacity: 0,
    visibility: 'hidden'
  };

  const transitionStyles = {
    entering: { opacity: 1, visibility: 'visible',transform: 'translate(0%)' },
    entered: { opacity: 1, visibility: 'visible',transform: 'translate(0%)' },
    exiting: { opacity: 0, visibility: 'hidden',transform: 'translate(100%)'  },
    exited: { opacity: 0, visibility: 'hidden',transform: 'translate(100%)' },
  };

  return (
    <Transition 
      timeout={duration} 
      in={props.show} 
      unmountOnExit
      onEnter={()=> props.showBtn(false)}
      onExited={()=> props.showBtn(true)}
      >
      {(state) => (
        <div className="modal mt-5 d-block " style={{
         ...defaultStyle,
         ...transitionStyles[state]
       }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Typical modal window</h5>
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>Modal body content</p>
              </div>
              <div className="modal-footer">
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn btn-secondary"
                >
                  Close
                </button>
                <button
                  onClick={() => props.onClose(false)}
                  type="button"
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
};

const ReactTransitionGroup = () => {
  const [showModal, setShowModal] = useState(false);
  const [showBtn, setShowBtn] = useState(true)
 const body = document.querySelector('body')
  return (
    <>
      <nav>
        <NavLink className="link container mb-3 w-75" to="/react-libraries">
          ← Back
        </NavLink>
      </nav>
      <Container>
        <Modal onClose={setShowModal} show={showModal} showBtn={setShowBtn}/>
        {showBtn ? <button
          className="btn btn-warning btn-my mt-5"
          type="button"
          onClick={() => {
            setShowModal(true)
            // body.classList.add('aaa')  так можно повесить на боди класс с еффектами
          }}
          
        >
          Open modal
        </button> : null}
       
      </Container>
    </>
  );
};

export default ReactTransitionGroup;
