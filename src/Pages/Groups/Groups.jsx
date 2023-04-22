import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";

const groups = [
  {
    id: 1,
    name: "University of Nairobi",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Expand your Knowledge",
  },
  {
    id: 2,
    name: "Kenyatta University",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
  {
    id: 3,
    name: "Nyeri University",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
  {
    id: 4,
    name: "USIU-A",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
  {
    id: 35,
    name: "Masinde Moriro University",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
  {
    id: 33,
    name: "Egerton University",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
  {
    id: 32,
    name: "JKUAT",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1681493644/group_dbppwq.avif",
    description: "Connect",
  },
];

const Groups = () => {
  const columnCount = useBreakpointValue({ base: 2, md: 3, lg: 6 });

  return (
    <Box align="center" minH="100vh" px={14} py={8}>
      <Heading as="h1" size="lg" textAlign="center" mb={8}>
        Chapters
      </Heading>
      <Grid templateColumns={`repeat(${columnCount}, 1fr)`} gap={4}>
        {groups.map((group) => (
          <GridItem key={group.id}>
            <Box
              borderRadius="md"
              overflow="hidden"
              _hover={{ boxShadow: "md", cursor: "pointer" }}
            >
              <Avatar size="2xl" src={group.imageUrl} alt={group.name} />
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
