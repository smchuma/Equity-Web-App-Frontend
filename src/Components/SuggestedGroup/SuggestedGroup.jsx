import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedGroup = ({ isOnline }) => {
  const groups = [
    {
      name: "Tech Enthusiasts",
      image: "",
    },
    {
      name: "Travel Buddies",
      image: "",
    },
    {
      name: "Foodies",
      image: "",
    },
    {
      name: "Fitness Fanatics",
      image: "",
    },
  ];
  return (
    <Box overflowY="scroll" maxHeight="300px" overflow="hidden">
      {groups.map((group) => (
        <Stack
          key={group.name}
          direction="row"
          spacing={4}
          align="center"
          mb={2}
        >
          <Avatar size="md" name={group.name} src={group.image}>
            {isOnline && <AvatarBadge boxSize="1em" bg="green.500" />}
          </Avatar>
          <Text>{group.name}</Text>
        </Stack>
      ))}
    </Box>
  );
};

export default SuggestedGroup;
