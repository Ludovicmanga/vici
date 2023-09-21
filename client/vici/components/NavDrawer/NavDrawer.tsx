import React from "react";
import { Drawer } from "@mui/material";
import styles from "./NavDrawer.module.scss";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavDrawer = (props: Props) => {
  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      PaperProps={{
        sx: { width: "20%" },
      }}
    >
      <nav className={styles.container}>
        <div className={styles.ul}>
          <div className={styles.li}>Train</div>
          <div className={styles.li}>Manage cards</div>
          <div className={styles.li}>Manage categories</div>
          <div className={styles.li}>Share with friends</div>
        </div>
      </nav>
    </Drawer>
  );
};

export default NavDrawer;
