import { Skeleton, SkeletonCircle, Stack } from "@chakra-ui/react";
import React from "react";

const SkeletonLoader = (props) => {
  const { isCircle, ...rest } = props;

  if (isCircle) {
    return (
      <Stack>
        <SkeletonCircle size={props.size} {...rest} />
      </Stack>
    );
  }

  return (
    <Stack>
      <Skeleton
        width={props.width}
        height={props.height}
        {...props}
        borderRadius={20}
      />
    </Stack>
  );
};

export default SkeletonLoader;
