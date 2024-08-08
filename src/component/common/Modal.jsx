import styled from "@emotion/styled";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Toaster } from "react-hot-toast";

const Modal = ({ onClose, children, actionBar }) => {
  useEffect(() => {
    document.body.classList.add("overflow");

    return () => {
      document.body.classList.remove("overflow");
    };
  }, []);
  const Container = styled.div`
    position: fixed;
    background: #fffffff0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
  `;
  const ModalBack = styled.div`
    position: fixed;
    background: #fff;
    box-shadow: 5px 5px 20px #6d6c6c30;
    top: 50%;
    left: 50%;
    right: 50%;
    bottom: 50%;
    z-index: 1000;
    width: 700px;
    height: 450px;
    transform: translate(-50%, -50%);
    border-radius: 7px;
    padding: 20px 20px;
    font-family: "Poppins", sans-serif;
    @media (max-width: 768px) {
      height: 500px;
      width: 230px;
    }
  `;
  const ModalActionBar = styled.div`
    display: flex;
    justify-content: end;
  `;
  const ModalContent = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
  `;

  const ModalChildren = styled.div`
    width: 95%;
  `;

  return ReactDOM.createPortal(
    <div>
      <Container onClick={onClose}></Container>
      <ModalBack>
        <Toaster />

        <ModalActionBar>{actionBar}</ModalActionBar>
        <ModalContent>
          <ModalChildren className="w-11/12 md:w-10/12 lg:w-9/12">
            {children}
          </ModalChildren>
        </ModalContent>
      </ModalBack>
    </div>,
    document.querySelector(".modal-container")
  );
};

export default Modal;
