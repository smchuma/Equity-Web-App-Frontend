import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

const SuggestedGroup = ({ isOnline }) => {
  const groups = [
    {
      name: "Tech Enthusiasts",
      image:
        "https://thegadgetflow.com/wp-content/uploads/2019/11/The-best-gifts-and-gadgets-for-any-tech-enthusiast-768x358.jpg",
    },
    {
      name: "Travel Buddies",
      image:
        "https://scontent.fnbo1-1.fna.fbcdn.net/v/t39.30808-6/309198654_550814973710943_3317643543634041598_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFLpMN7MgePLDUSvilv_UfPUU9KDSzw2VBRT0oNLPDZUPX_GCBu3wnDIQhEre_KH1dJjhjS8LQTKZ3LbuR8fYgk&_nc_ohc=8JTkXJHkOhcAX9w77zW&_nc_ht=scontent.fnbo1-1.fna&oh=00_AfD01_tsCVMoUsiDdoP5fHTMTbjX1HMdUYp8lYgyOyUSoA&oe=641A7D59",
    },
    {
      name: "Foodies",
      image:
        "https://img.freepik.com/premium-vector/foodies-typography-logo-label-healthy-food_106244-165.jpg?w=740",
    },
    {
      name: "Fitness Fanatics",
      image:
        "https://img.freepik.com/free-photo/sporty-couple-makes-selfie-after-fitness-exercise-smile-broadly-express-good-emotions-wear-casual-clothes-keep-hands-extended-lead-healthy-lifestyle-isolated-purple-wall-workout-training_273609-32463.jpg?w=996&t=st=1679180708~exp=1679181308~hmac=0f74c051ba76d3b9c0c4c48c133c598381b38f0f4e68ab950505d9ddd1387d1e",
    },
  ];
  return (
    <Box overflowY="scroll" maxHeight="300px">
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
