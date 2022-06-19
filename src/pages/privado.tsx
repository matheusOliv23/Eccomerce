import Link from "next/link";
import React from "react";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

export default function privado() {
  return (
    <RequireAuth>
      <div>
        {" "}
        <nav>
          <Link href="/">Pagina Inicial</Link>
          <Link href="/privado">Sessão privada</Link>
        </nav>
        <div>privado</div>
      </div>
    </RequireAuth>
  );
}
