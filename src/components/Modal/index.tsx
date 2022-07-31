import React, { ReactNode, useEffect, useRef, useState } from "react";
import ReactDOM, { createPortal } from "react-dom";
import styled from "styled-components";
import { StringSchema } from "yup";
import {
  StyledModal,
  StyledModalBody,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalWrapper,
} from "./styles";

interface ModalProps {
  open: any;
  onClose: any;
  title: string;
  children: ReactNode;
}

export default function Modal({ open, onClose, title, children }: ModalProps) {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = open ? (
    <StyledModalOverlay>
      <StyledModalWrapper>
        <StyledModal>
          <StyledModalHeader>
            <a href="#" onClick={handleCloseClick}>
              x
            </a>
          </StyledModalHeader>
          {title}
          <StyledModalBody>{children}</StyledModalBody>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalOverlay>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
}
