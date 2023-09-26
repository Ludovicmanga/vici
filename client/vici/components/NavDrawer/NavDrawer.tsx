import React from "react";
import { Drawer } from "@mui/material";
import styles from "./NavDrawer.module.scss";
import Link from "next/link";

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
        sx: { width: "26%" },
      }}
    >
      <nav className={styles.container}>
        <div className={styles.ul}>
          <Link
            href="/"
            onClick={() => props.setIsOpen(false)}
            className={styles.li}
          >
            <div className={styles.emoji}>💪</div>
            <div className={styles.navText}>S'entrainer</div>
          </Link>
          <Link
            href="/createCards"
            onClick={() => props.setIsOpen(false)}
            className={styles.li}
          >
            <div className={styles.emoji}>✍</div>
            <div className={styles.navText}> Créer des cartes</div>
          </Link>
        </div>
      </nav>
    </Drawer>
  );
};

export default NavDrawer;
