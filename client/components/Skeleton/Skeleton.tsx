import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

type Props = {};

const StyledSkeleton = (props: Props) => {
  const numberOfSkeletons = 10; // Number of Skeleton elements to render

  return (
    <Stack spacing={1}>
      {Array.from({ length: numberOfSkeletons }).map((_, index) => (
        <Skeleton key={index} variant="rounded" width="100%" height={60} />
      ))}
    </Stack>
  );
};

export default StyledSkeleton;
