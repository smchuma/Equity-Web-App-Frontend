import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { EventsCard } from "../../Components";
import { Posts } from "../../dummyData";

const Events = () => {
  return (
    <Stack
      direction="row"
      h="calc(100vh-25%)"
      w="100%"
      sx={{
        paddingTop: "65px",
      }}
    >
      <Box w="calc(100% - 30%)" align="center">
        <Box m={2}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
          >
            Events
          </Text>
        </Box>
        <Stack
          direction={{ base: "column" }}
          spacing={{ base: 2, sm: 4 }}
          px={8}
        >
          {Posts.map((post) => (
            <EventsCard key={post.id} event={post} />
          ))}
        </Stack>
      </Box>
      <Box w="25%" bg="blue" pos="sticky" right={0}>
        sss
      </Box>
    </Stack>
  );
};
export default Events;
