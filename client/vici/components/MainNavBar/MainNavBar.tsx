"use client";

import React, { useState } from "react";
import styles from "./MainNavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import NavDrawer from "../NavDrawer/NavDrawer";
import { signIn, signOut, useSession } from 'next-auth/react';

type Props = {};

const MainNavBar = (props: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const session = useSession();

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
        { session.data?.user ? <div onClick={() => signOut()}>Se déconnecter</div> : <div onClick={() => signIn()}>Se connecter</div> }
      </Link>
    </div>
  );
};

export default MainNavBar;
