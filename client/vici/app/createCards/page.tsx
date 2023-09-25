import { Autocomplete, Button, Paper, TextField } from "@mui/material";
import React from "react";
import styles from "./page.module.scss";
import CreateForm from "@/components/CreateForm/CreateForm";
import PageTitleSection from "@/components/PageTitleSection/PageTitleSection";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
      <PageTitleSection emoji={<div>🧠</div>} text="Créer de nouvelles cartes" />
      <CreateForm />
    </div>
  );
};

export default page;
