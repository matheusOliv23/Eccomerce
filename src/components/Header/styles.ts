import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 6rem;
  //background-color: ${(props) => props.theme.backgroundNav};
  position: sticky;
  width: 100%;
  color: ${(props) => props.theme.textLight};
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  height: 6rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Nav = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    padding-left: 3rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme.textLight};
  }
`;

export const CartIndicator = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;

  transform: translate(5%, 5%);
`;
export const CartButton = styled.div``;
