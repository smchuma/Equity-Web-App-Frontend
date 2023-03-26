import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import { Chats, Conversations } from "../../Components";
import "./Forum.scss";

const Forum = () => {
  return (
    <Stack
      direction="row"
      h="100vh"
      w="100%"
      className="Forum"
      sx={{
        paddingTop: "65px",
      }}
      overflow="hidden"
    >
      <Box w="calc(100% - 25%)">
        <Conversations />
      </Box>
      <Box width="25%" className="rightBar">
        <Chats />
      </Box>
    </Stack>
  );
};

export default Forum;
