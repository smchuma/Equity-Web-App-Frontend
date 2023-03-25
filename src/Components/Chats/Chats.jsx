import { Avatar, Box, Divider, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const Chat = () => {
  return (
    <>
      <Box pos="relative" w="100%" boxShadow="0px 0px 2px rgba(0, 0, 0, 0.25)">
        <Stack p={3} spacing={2} sx={{ maxHeight: "92vh" }}>
          <Stack
            alignItems={"center"}
            justifyContent="space-between"
            direction="row"
          >
            <Text variant="h5">Online</Text>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <Input
              sx={{ width: "100%" }}
              placeholder="Search"
              variant="filled"
            />
          </Stack>
          <Stack spacing={1}>
            <Divider />
          </Stack>
          <Stack
            sx={{
              flexGrow: 1,
              overflow: "scroll",
              height: "100%",
              "&::-webkit-scrollbar": {
                width: "0.4em",
                height: "0.4em",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "gray.500",
              },
            }}
          >
            <Box>
              <Stack direction="row" align="center" p={2}>
                <Avatar />
                <Text>Username</Text>
              </Stack>
            </Box>
            <Box>
              <Stack direction="row" align="center" p={2}>
                <Avatar />
                <Text>Username</Text>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  );
};

export default Chat;
