"use client";

import React, { useState } from "react";
import styles from "./MainNavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import NavDrawer from "../NavDrawer/NavDrawer";

type Props = {};

const MainNavBar = (props: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <div className={styles.container}>
      <NavDrawer isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
      <div className={styles.left}>
        <div onClick={handleToggleDrawer} className={styles.menuBtn}>
          <AiOutlineMenu />
        </div>
        <div className={styles.title}>Vici</div>
      </div>
      <Link href="#" className={styles.right}>
        Login
      </Link>
    </div>
  );
};

export default MainNavBar;
