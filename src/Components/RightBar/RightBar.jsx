import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import SuggestedUser from "../SuggestedUser/SuggestedUser";
import SuggestedGroup from "../SuggestedGroup/SuggestedGroup";

const RightBar = () => {
  const isOnline = true;
  return (
    <div className="rightBar">
      <div className="rightBar-wrapper">
        <Stack direction="column" spacing={4}>
          <Text
            fontSize="xl"
            fontWeight="500"
            p="4"
            borderRadius="20px"
            color="#a32a29"
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
            color="#a32a29"
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
      </div>
    </div>
  );
};

export default RightBar;
