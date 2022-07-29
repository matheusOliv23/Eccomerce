import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React, { ReactNode } from "react";

// este componente limita a largura máxima do children para padronização de layout

interface ContainerProps {
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      maxWidth: "80rem",
      margin: "0 auto",
      marginBottom: "15rem",
      color: "#895B9D",
    },
  })
);
export default function MaxContainer({ children }: ContainerProps) {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
}
