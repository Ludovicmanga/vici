"use client";

import React, { useState } from "react";
import styles from "./MainNavBar.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import NavDrawer from "../NavDrawer/NavDrawer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logOut } from "@/helpers/auth";
import Logo from "@/public/illustrations/vici_white.svg";
import Image from "next/image";

type Props = {};

const MainNavBar = (props: Props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleToggleDrawer = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const handleLogout = async () => {
    await logOut(dispatch);
  };

  const loggedUserState = useAppSelector((state) => state.loggedUser);

  return (
    <div className={styles.container}>
      <NavDrawer isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
      <div className={styles.left}>
        <div onClick={handleToggleDrawer} className={styles.menuBtn}>
          <AiOutlineMenu />
        </div>
        <Image width={100} className={styles.logo} src={Logo} alt="logo" />
      </div>
      <div className={styles.right}>
        {loggedUserState.user && loggedUserState.user.email ? (
          <div className={styles.logoutBtn} onClick={handleLogout}>
            Se déconnecter
          </div>
        ) : (
          "Welcome " + loggedUserState?.user?.email
        )}
      </div>
    </div>
  );
};

export default MainNavBar;
