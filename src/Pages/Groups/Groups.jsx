import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

const groups = [
  {
    id: 1,
    name: "Group 1",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Group 2",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Nullam eget felis at augue tincidunt posuere.",
  },
  {
    id: 3,
    name: "Group 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Group 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Group 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Group 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
  {
    id: 3,
    name: "Group 3",
    imageUrl: "https://via.placeholder.com/300x150",
    description: "Duis vel metus nec lorem aliquet faucibus.",
  },
];

const Groups = () => {
  return (
    <Box minH="100vh" px={4} py={8}>
      <Heading as="h1" size="lg" textAlign="center" mb={8}>
        Groups
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {groups.map((group) => (
          <GridItem key={group.id}>
            <Box
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "md", cursor: "pointer" }}
            >
              <Image src={group.imageUrl} alt={group.name} />
              <Box p={4}>
                <Heading as="h2" size="md" mb={2}>
                  {group.name}
                </Heading>
                <Text fontSize="sm" mb={4}>
                  {group.description}
                </Text>
                <Button colorScheme="teal" variant="solid">
                  Join
                </Button>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default Groups;
