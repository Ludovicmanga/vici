import React from "react";
import { Drawer, useMediaQuery } from "@mui/material";
import styles from "./NavDrawer.module.scss";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/illustrations/vici_black.svg";

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavDrawer = (props: Props) => {
  const bigScreen = useMediaQuery('(min-width: 40rem)');

  return (
    <Drawer
      anchor="left"
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      PaperProps={{
        sx: { width: bigScreen ? "18%" : "55%" },
      }}
    >
      <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <Image className={styles.logo} src={Logo} width={100} alt="logo" />
        </div>
        <div className={styles.ul}>
          <Link
            href="/"
            onClick={() => props.setIsOpen(false)}
            className={styles.li}
          >
            <div className={styles.emoji}>💪</div>
            <div className={styles.navText}>S&apos;entrainer</div>
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
