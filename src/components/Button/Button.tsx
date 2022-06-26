import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type Button = {
  children: ReactNode;
};

export default function Button({ children }: Button) {
  return <div className={styles.container}>{children}</div>;
}
