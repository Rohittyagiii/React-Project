import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import BackDrop from "./Backdrop";

const ModalOverlay = React.forwardRef((props, ref) => {
  const content = (
    <div
      ref={ref}
      className={`modal ${props.className || ""}`}
      style={props.style}
    >
      <header className={`modal__header ${props.headerClass || ""}`}>
        <h2>{props.header}</h2>
      </header>

      <form
        onSubmit={props.onSubmit ? props.onSubmit : (e) => e.preventDefault()}
      >
        <div className={`modal__content ${props.contentClass || ""}`}>
          {props.children}
        </div>

        <footer className={`modal__footer ${props.footerClass || ""}`}>
          {props.footer}
        </footer>
      </form>
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("modal-hook")
  );
});

const Modal = (props) => {
  const nodeRef = useRef(null);

  return (
    <>
      {props.show && <BackDrop onClick={props.onCancel} />}

      <CSSTransition
        nodeRef={nodeRef}
        in={props.show}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay ref={nodeRef} {...props} />
      </CSSTransition>
    </>
  );
};

export default Modal;