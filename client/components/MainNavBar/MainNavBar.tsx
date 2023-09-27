"use client";

import React, { useState } from "react";
import styles from "./MainNavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import NavDrawer from "../NavDrawer/NavDrawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import { logOut } from "@/helpers/auth";

type Props = {};

const MainNavBar = (props: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const handleLogout = async () => {
    await logOut(dispatch);
  }

  const loggedUserState = useAppSelector(state => state.loggedUser);

  return (
    <div className={styles.container}>
      <NavDrawer isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
      <div className={styles.left}>
        <div onClick={handleToggleDrawer} className={styles.menuBtn}>
          <AiOutlineMenu />
        </div>
        <div className={styles.title}>Vici</div>
      </div>
      <div className={styles.right}>
        {loggedUserState.user && loggedUserState.user.email ? <div className={styles.logoutBtn} onClick={handleLogout}>Se déconnecter</div> : 'Welcome ' + loggedUserState?.user?.email}
      </div>
    </div>
  );
};

export default MainNavBar;
