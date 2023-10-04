import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import styles from './StyledSkeleton.module.scss';

type Props = {};

const StyledSkeleton = (props: Props) => {
  const numberOfSkeletons = 4; // Number of Skeleton elements to render

  return (
    <Stack className={styles.skeletonContainer} spacing={1}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <Skeleton key={index}  width="100%" height={100} />
      ))}
    </Stack>
  );
};

export default StyledSkeleton;

