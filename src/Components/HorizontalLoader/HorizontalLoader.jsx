import { Progress, Box } from "@chakra-ui/react";

function HorizontalLoader() {
  return (
    <>
      <Box zIndex={2} position="fixed" top="0" left="0" right="0">
        <Progress size="xs" isIndeterminate colorScheme="cyan" />
      </Box>
    </>
  );
}

export default HorizontalLoader;
