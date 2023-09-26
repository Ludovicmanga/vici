import React from "react";
import styles from "./page.module.scss";
import CreateForm from "@/components/CreateForm/CreateForm";

type Props = {};

const page = (props: Props) => {
  return (
    <div className={styles.container}>
        <CreateForm />
    </div>
  );
};

export default page;
