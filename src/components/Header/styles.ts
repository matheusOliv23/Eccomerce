import styled from "styled-components";
import { lighten } from "polished";

interface NavlinkProps {
  isActive: boolean;
}
export const HeaderContainer = styled.nav`
  width: 100%;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  top: 0;
  z-index: 9999999;
  position: sticky;
  height: 6rem;

  h2 {
    padding-right: 5rem;
  }

  strong {
    color: ${(props) => props.theme.primary};
  }
  background-color: ${(props) => props.theme.backgroundDark};

  color: ${(props) => props.theme.textLight};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  z-index: 1;
  width: 100%;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  margin-right: -1.4rem;
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavlinkContainer = styled.li<NavlinkProps>`
  padding: 0 1rem;
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: ${(props) =>
      props.isActive ? lighten(0.2, props.theme.primary) : "white"};
    //background: ${(props) => (props.isActive ? " #d0d3d4" : "black")};
    padding: 1.3rem;
    font-weight: 600;
    &:hover {
      color: ${(props) =>
        props.isActive
          ? lighten(0.2, props.theme.primary)
          : lighten(
              0.2,
              props.theme.primary
            )}; // muda o hover caso o link esteja ativo ou não
      transition: 0.3s ease-in-out;
    }
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
