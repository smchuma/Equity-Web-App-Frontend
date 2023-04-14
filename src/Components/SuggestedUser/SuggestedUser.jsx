import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import useUser from "../../hooks/useUser";

const SuggestedUser = ({ isOnline }) => {
  const { user, allUsers } = useUser();

  const filteredUsers = allUsers.filter((allUser) => allUser._id !== user._id);

  return (
    <>
      <Box>
        {filteredUsers.map((user) => (
          <Stack
            key={user._id}
            direction="row"
            spacing={4}
            align="center"
            mb={10}
          >
            <Avatar
              size="md"
              name={user.firstName + " " + user.lastName}
              src=""
            >
              {isOnline && <AvatarBadge boxSize="1em" bg="green.500" />}
            </Avatar>
            <Text>{user.firstName + " " + user.lastName}</Text>
          </Stack>
        ))}
      </Box>
    </>
  );
};

export default SuggestedUser;
