import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const RightBar = () => {
  const isOnline = true;
  return (
    <Stack direction="column" spacing={4}>
      <Text
        fontSize="xl"
        fontWeight="500"
        p="3"
        borderRadius="20px"
        color="brand.primary"
        borderWidth="2px"
        borderColor="gray.100"
        bg="#ffefe5"
        mb={5}
        textAlign="left"
      >
        Suggested scholars
      </Text>
      <Box flex={1} w="100%" display={{ base: "none", lg: "block" }}>
        <SuggestedUser isOnline={isOnline} />
      </Box>
    </Stack>
  );
};

export default RightBar;
