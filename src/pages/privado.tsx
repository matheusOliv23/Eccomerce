import Link from "next/link";
import React from "react";

export default function privado() {
  return (
    <div>
      {" "}
      <nav>
        <Link href="/">Pagina Inicial</Link>
        <Link href="/privado">Sessão privada</Link>
      </nav>
      <div>privado</div>
    </div>
  );
}
