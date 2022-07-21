import styled from "styled-components";

export const ButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  transition: filter 0.2s ease-in-out;
  border-radius: 1rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  //background-color: #cf01fa;
  background-color: #490f8f;
  width: 100%;
  color: white;
  text-transform: uppercase;
  padding: 1.1rem 3px;
  &:hover {
    filter: brightness(0.9);
  }
  > span {
    font: 500 1.6rem;
  }
`;
