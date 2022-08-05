import styled from "styled-components";

export const StyledModalBody = styled.div`
  padding-top: 10px;
`;

export const StyledModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 25px;
`;
export const StyledModalWrapper = styled.div`
  width: 800px;
  height: 100vh;
`;

export const StyledModal = styled.div`
  background: white;
  width: 350px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  //right: -100%;
  transition: 1500ms ease;
  background-color: #161623;
  border-radius: 15px;
  padding: 15px;
`;
export const StyledModalOverlay = styled.div`
  transition: 1.5s;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999999;
`;
