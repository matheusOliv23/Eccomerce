import React, { ReactNode } from "react";
import { ButtonBase } from "./styles";

type Button = {
  children: ReactNode;
  onClick?: any;
};

export default function Button({ children, onClick }: Button) {
  return <ButtonBase onClick={onClick}>{children}</ButtonBase>;
}
