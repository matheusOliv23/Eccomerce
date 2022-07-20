import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgb(0, 0, 0, 25%);
  width: 15.31rem;
  text-align: center;
  margin: 1.5rem;
  background-color: #fff;
  gap: 0.5rem;
`;

export const CardImage = styled.img`
  width: 15.31rem;
  object-fit: cover;
  transition: transform 0.2s;
  height: 13rem;

  &:hover {
    transform: scale(0.95);
  }
`;

export const Discount = styled.span`
  background-color: black;
  color: #fff;
  padding: 1rem 2rem;
  margin-top: -1.8rem;
  z-index: 100;
`;
