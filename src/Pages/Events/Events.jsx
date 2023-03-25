import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
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
      <Box w="100%">
        <Box m={5}>
          <Text
            fontSize="3xl"
            fontWeight="bold"
            color="gray.500"
            textAlign="center"
          >
            Events
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} px={12}>
          {Posts.map((post) => (
            <EventsCard key={post.id} event={post} />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};
export default Events;
