import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 1rem;
  width: 17.5rem;
  height: 25rem;
  text-align: center;
  margin: 1.5rem;
  margin-top: 8rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;

  color: white;

  gap: 0.5rem;
  position: relative;

  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2rem);
`;

export const CardImage = styled.img`
  border-radius: 1rem;
  width: 17.5rem;
  height: 9rem;
  object-fit: cover;
  transition: transform 0.2s;
  //height: 13rem;

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

export const Price = styled.h4`
  background-color: black;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border: 1px solid ${(props) => props.theme.primary};
`;