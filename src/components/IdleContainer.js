import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import IdleTimer from "react-idle-timer";

function IdleTimerContainer({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeoutRef = useRef(null);
  const history = useHistory();

  Modal.setAppElement("#root");

  const onIdle = () => {
    console.log("User is idle !");
    setModalIsOpen(true);
    sessionTimeoutRef.current = setTimeout(handleLogout, 5000);
  };

  const handleLogout = () => {
    console.log("User is logged out !");
    setIsLoggedIn(false);
    setModalIsOpen(false);
    history.push("/");
    clearTimeout(sessionTimeoutRef.current);
  };

  const handleKeep = () => {
    console.log("User is keep !");
    setModalIsOpen(false);
    clearTimeout(sessionTimeoutRef.current);
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen}>
        <h2>
          Anda sudah menganggur untuk sementara waktu,
          <p>Anda akan segera keluar.</p>
        </h2>
        <div>
          <button onClick={handleLogout}>Keluarkan saya</button>
          <button onClick={handleKeep}>Biarkan saya tetap masuk</button>
        </div>
      </Modal>
      <IdleTimer ref={idleTimerRef} timeout={5 * 1000} onIdle={onIdle}>
        {children}
      </IdleTimer>
    </div>
  );
}

export default IdleTimerContainer;
