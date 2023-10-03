import Image from "next/image";
import React from "react";
import styles from "./EmptySearch.module.scss";
import SearchNotFoundImage from "@/public/illustrations/search_not-found.png";

type Props = {};

const EmptySearch = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>Aucune carte avec ce filtre</div>
      <div>
        <Image width={500} alt="not found" src={SearchNotFoundImage} />
      </div>
    </div>
  );
};

export default EmptySearch;
