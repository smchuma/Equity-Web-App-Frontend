import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const EventsCard = ({ event }) => {
  const { photo, date, desc } = event;

  return (
    <>
      <Card maxW="sm" maxH="500px" overflow="hidden">
        <Image
          src={photo}
          alt="Event image"
          sx={{
            height: "200px",
            width: "100%",
          }}
        />
        <Box
          overflowY="scroll"
          sx={{
            "&::-webkit-scrollbar": {
              width: "0.1em",
              height: "0.1em",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "gray.200",
            },
          }}
        >
          <CardBody textAlign="justify">
            <Stack>
              <Text fontSize="sm">{date}</Text>
              <Heading fontSize="md" mb="2">
                Event Name
              </Heading>
              <Text fontSize="sm" mb="2">
                {desc}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <Button w="100%" colorScheme="blue">
              Join
            </Button>
          </CardFooter>
        </Box>
      </Card>
    </>
  );
};

export default EventsCard;
