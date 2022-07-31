import { SwipeableDrawer } from "@mui/material";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: any;
}

export default function index({ isOpen, onClose }: ModalProps) {
  const [state, setState] = React.useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const content = <div>teste</div>;
  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={onClose}
        onOpen={toggleDrawer(true)}
      >
        {content}
      </SwipeableDrawer>
    </React.Fragment>
  );
}
