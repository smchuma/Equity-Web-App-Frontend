import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedUser = ({ isOnline }) => {
  const users = [
    {
      name: "Avicii",
      image:
        "https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b1b0f1b0e1c1b1b1b1b1b1b1b.jpg",
    },
    {
      name: "Taylor Swift",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/02/taylor-swift-2023-grammys-red-carpet-billboard-1548.jpg?w=942&h=623&crop=1",
    },
    {
      name: "Justin Bieber",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/justin-bieber-gettyimages-1202421980.jpg?resize=1200:*",
    },
    {
      name: "Selena Gomez",
      image:
        "https://www.billboard.com/wp-content/uploads/2023/02/09-Selena-Gomez-2023-billboard-1548.jpg?w=942&h=623&crop=1",
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
