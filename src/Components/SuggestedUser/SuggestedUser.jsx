import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ isOnline }) => {
  const users = [
    {
      name: "Avicii",
      image: "",
    },
    {
      name: "Taylor Swift",
      image: "",
    },
    {
      name: "Justin Bieber",
      image: "",
    },
    {
      name: "Selena Gomez",
      image: "",
    },
  ];
  return (
    <>
      <Box overflowY="scroll" maxHeight="300px" overflow="hidden">
        {users.map((user) => (
          <Stack
            key={user.name}
            direction="row"
            spacing={4}
            align="center"
            mb={10}
          >
            <Avatar size="md" name={user.name} src={user.image}>
              {isOnline && <AvatarBadge boxSize="1em" bg="green.500" />}
            </Avatar>
            <Text>{user.name}</Text>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default SuggestedUser;
