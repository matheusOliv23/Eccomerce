import Link from "next/link";
import React from "react";
import Header from "src/components/Header";
import { RequireAuth } from "../contexts/Auth/RequireAuth";

export default function privado() {
  return (
    <RequireAuth>
      <Header />
    </RequireAuth>
  );
}
