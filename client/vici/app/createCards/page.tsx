import React from "react";
import styles from "./page.module.scss";
import CreateForm from "@/components/createForm/CreateForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
        <CreateForm />
    </div>
  );
};

export default page;
