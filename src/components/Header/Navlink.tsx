import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";
import { NavlinkContainer } from "./styles";

interface LinkProps {
  titulo: string; // titulo do link
  rota: string; // caminho do link
  includes?: boolean;
}
export default function Navlink({ titulo, rota, includes = false }: LinkProps) {
  const router = useRouter();

  function verificarSeAtivo() {
    if (includes) {
      return router.pathname.includes(rota);
    }

    return rota === router.pathname;
  }

  const isActive = verificarSeAtivo(); //verifica se a rota atual é igual ao caminho do link, caso seja verdade isActive será true

  return (
    <NavlinkContainer isActive={isActive}>
      <Link href={rota}>
        <a>{titulo}</a>
      </Link>
    </NavlinkContainer>
  );
}
