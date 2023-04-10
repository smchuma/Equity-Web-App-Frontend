import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

import "./Events.scss";

const events = [
  {
    id: 1,
    name: "Event 1",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Event 2",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Nullam eget felis at augue tincidunt posuere.",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
];

const Events = () => {
  const color = useColorModeValue("gray.700", "gray.50");

  return (
    <Stack align="center" color={color} px={4} py={8}>
      <Box borderRadius="md" overflow="hidden" mb={8}>
        <Image src="./assets/pic.png" alt="Banner Image" />
        <Box p={4}>
          <Heading as="h1" size="lg" textAlign="center" mb={4}>
            Upcoming Events
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={4}>
            Dont Miss out on these upcoming events
          </Text>
        </Box>
      </Box>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {events.map((event) => (
          <GridItem key={event.id}>
            <Box
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "md", cursor: "pointer" }}
            >
              <Image src={event.imageUrl} alt={event.name} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {event.name}
                </Heading>
                <Text fontSize="sm">{event.description}</Text>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Stack>
  );
};
export default Events;
