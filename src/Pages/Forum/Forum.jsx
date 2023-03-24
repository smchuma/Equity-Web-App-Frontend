import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Conversations } from "../../Components";

const Forum = () => {
  return (
    <Stack direction="row" h="calc(100vh - 65px)" w="100%">
      <Box w="calc(100% - 25%)">
        <Conversations />
      </Box>
      <Box
        sx={{
          width: "25%",
        }}
      >
        sss
      </Box>
    </Stack>
  );
};

export default Forum;
