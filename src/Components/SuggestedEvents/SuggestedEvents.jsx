import {
  Box,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const SuggestedEvents = () => {
  return (
    <Stack
      direction="row"
      spacing={{ base: 2, sm: 4 }}
      maxHeight="300px"
      overflow="hidden"
    >
      <HStack w="100%" borderRadius="10px" borderWidth={1}>
        <Image
          src={
            "https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/migrated_attachments/new_statesman_events.webp?itok=jDiozd9o"
          }
          alt="Event"
          boxSize="100px"
          objectFit="cover"
        />
        <Box>
          <Text fontSize="md" fontWeight="bold">
            Event 1
          </Text>
        </Box>
      </HStack>
    </Stack>
  );
};

export default SuggestedEvents;
