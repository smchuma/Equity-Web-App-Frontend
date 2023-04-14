import {
  Box,
  Flex,
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
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493008/pic2_wof94j.jpg",
    description: "Come and Connect",
  },
  {
    id: 2,
    name: "Event 2",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493029/pic1_llh1on.jpg",
    description: "Let's connect together",
  },
  {
    id: 3,
    name: "Event 3",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493008/pic2_wof94j.jpg",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 332,
    name: "Event 3",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493029/pic1_llh1on.jpg",
    description: "Come and connect",
  },
  {
    id: 3111,
    name: "Event 3",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493029/pic1_llh1on.jpg",
    description: "Come and connect",
  },
  {
    id: 322222,
    name: "Event 3",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493029/pic1_llh1on.jpg",
    description: "Come and connect",
  },
  {
    id: 34556,
    name: "Event 3",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493029/pic1_llh1on.jpg",
    description: "Come and connect",
  },
];

const Events = () => {
  const color = useColorModeValue("gray.700", "gray.50");

  return (
    <Stack align="center" color={color} px={10} py={8}>
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

      <Flex
        flexWrap="wrap"
        justifyContent={{ base: "center", md: "space-between" }}
        mx={{ base: -2, md: 0 }}
      >
        {events.map((event) => (
          <Box
            key={event.id}
            flex={{ base: "0 0 100%", md: "0 0 calc(33.33% - 1rem)" }}
            mb={{ base: 4, md: 0 }}
            mx={{ base: 2, md: 0 }}
            _hover={{ boxShadow: "md", cursor: "pointer" }}
            borderRadius="md"
            overflow="hidden"
          >
            <Image src={event.imageUrl} alt={event.name} />
            <Box p={4}>
              <Heading as="h2" size="md" mb={2}>
                {event.name}
              </Heading>
              <Text fontSize="sm">{event.description}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};
export default Events;
