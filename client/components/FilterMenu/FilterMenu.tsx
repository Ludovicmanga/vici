import React from "react";
import styles from "./FilterMenu.module.scss";
import { Category } from "@/types/constants";
import { Chip } from "@mui/material";

type Props = {
  selectedCategories: Category[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<Category[]>>;
  allCategories: Category[];
};

const FilterMenu = (props: Props) => {
  return (
    <>
      <div className={styles.pageTitleContainer}>
        <div className={styles.pageTitle}>
          <div className={styles.titleEmoji}>🔖</div>
          <div className={styles.pageTitleText}>Filtrer par catégorie</div>
        </div>
        <div className={styles.selectedCategoriesContainer}>
          {props.selectedCategories.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.name}
              variant="outlined"
              onDelete={() => {
                props.setSelectedCategories((curr) => {
                  return curr.filter(
                    (currCategory) => currCategory.id !== cat.id
                  );
                });
              }}
              className={styles.selectedChip}
            />
          ))}
        </div>
        <div className={styles.categoriesContainer}>
          {props.allCategories.map((cat) => (
            <Chip
              key={cat.id}
              label={cat.name}
              variant="outlined"
              onClick={() => {
                props.setSelectedCategories((curr) => {
                  if (!curr.map((currCat) => currCat.id).includes(cat.id)) {
                    return [...curr, cat];
                  } else {
                    return [...curr];
                  }
                });
              }}
              className={styles.chip}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterMenu;
