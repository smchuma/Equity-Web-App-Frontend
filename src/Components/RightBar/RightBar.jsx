import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import SuggestedGroup from "../SuggestedGroup/SuggestedGroup";

const RightBar = () => {
  const isOnline = true;
  return (
    <Stack direction="column" spacing={4}>
      <Text
        fontSize="xl"
        fontWeight="500"
        p="4"
        borderRadius="20px"
        color="brand.primary"
        borderWidth="2px"
        borderColor="gray.100"
        bg="#ffefe5"
      >
        Online Friends
      </Text>
      <Box flex={1}>
        <SuggestedUser isOnline={isOnline} />
      </Box>
      <Text
        fontSize="xl"
        fontWeight="500"
        p="4"
        borderRadius="20px"
        color="brand.primary"
        borderWidth="2px"
        borderColor="gray.100"
        bg="#ffefe5"
      >
        Groups
      </Text>
      <Box flex={1}>
        <SuggestedGroup isOnline={isOnline} />
      </Box>
    </Stack>
  );
};

export default RightBar;
