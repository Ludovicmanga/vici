import React, { ReactNode } from 'react';
import styles from './PageTitleSection.module.scss';

type Props = {
    emoji: ReactNode;
    text: string;
}

const PageTitleSection = (props: Props) => {
  return (
    <div className={styles.titleSectionContainer}>
        <div className={styles.titleContainer}>
          <div>{props.text}</div>
          <div className={styles.titleEmoji}>{props.emoji}</div>
        </div>
      </div>
  )
}

export default PageTitleSection