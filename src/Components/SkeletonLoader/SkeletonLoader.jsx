import { Box, Skeleton, Stack } from "@chakra-ui/react";
import PropTypes from "prop-types";

const SkeletonLoader = ({ height, width, padding, marginLeft, marginTop }) => {
  return (
    <Stack direction="column" spacing={4}>
      <Box
        marginLeft={marginLeft}
        padding={padding}
        marginTop={marginTop}
        width={width}
        borderRadius="md"
        boxShadow="md"
      >
        <Skeleton height="40px" mb="4" />
        <Skeleton height={height} mb="4" />
      </Box>
    </Stack>
  );
};
SkeletonLoader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  padding: PropTypes.number,
  marginLeft: PropTypes.number,
  marginTop: PropTypes.string,
};

export default SkeletonLoader;
