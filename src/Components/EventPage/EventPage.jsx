import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const EventPage = () => {
  const speakers = [
    { name: "Speaker 1", imageSrc: "speaker1.jpg" },
    { name: "Speaker 2", imageSrc: "speaker2.jpg" },
    { name: "Speaker 3", imageSrc: "speaker3.jpg" },
    { name: "Speaker 4", imageSrc: "speaker4.jpg" },
  ];
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Stack width="100%" mb={10}>
      <Flex
        width="100%"
        p={51}
        flexDirection={{
          base: "column",
          md: "row",
        }}
      >
        <Flex
          flex="1"
          align="center"
          boxShadow={`0px 4px 4px ${boxShadowColor}`}
        >
          <Image
            src={
              "https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1380&t=st=1682256725~exp=1682257325~hmac=fc3574e8064b6742c9e820bbe416f2d35b3e8fd21aa1a2957066f4f25555cf34"
            }
            w="100%"
            maxH={{
              md: "500px",
            }}
            objectFit="cover"
            boxSize={{
              base: "100%",
              md: "1500px",
            }}
          />
        </Flex>
        <Flex flexDir="column" justify="center" flex="1" ml={5}>
          <Box mb={3}>
            <Text
              display={{
                base: "none",
                md: "block",
              }}
              color="brand.secondary"
            >
              July 23
            </Text>
          </Box>
          <Box>
            <Heading color="brand.tomato">
              Equity Bank Hackathon: Innovate for the Future
            </Heading>
          </Box>
          <Box p={2} mt={5}>
            <Text textAlign="justify" fontSize="15px">
              Are you a creative problem solver with a passion for technology
              and finance? Then join Equity Bank for a hackathon designed to
              push the boundaries of what is possible. You will have the
              opportunity to work with other participants to develop
              cutting-edge solutions to some of the most pressing challenges
              facing the banking industry today. Whether you are a developer,
              designer, or business strategist, this event is a must-attend.
            </Text>
          </Box>
          <Button
            variant="unstyled"
            color="white"
            background="brand.tomato"
            mt={5}
            _hover={{
              background: "brand.primary",
              transform: "scale(0.9)",
            }}
          >
            Reserve a spot
          </Button>
        </Flex>
      </Flex>
      <Stack px={2}>
        <Flex
          align={{
            base: "center",
            md: "flex-start",
          }}
          px={5}
          justify="space-between"
        >
          <Box>
            <Box>
              <Text fontWeight="bold" fontSize="25px">
                When and Where
              </Text>
            </Box>
            <Flex flexWrap="wrap">
              <Box mt={3} mr={5}>
                <CalendarMonthIcon />
              </Box>
              <Flex>
                <Box>
                  <Text mb={1}>Date and Time</Text>
                  <Text color="gray.500" mr={5} fontSize="15px">
                    Thu, 27 July 2023 18:00 - 21:00 EAT
                  </Text>
                </Box>
              </Flex>
              <Flex mr={5} align="center">
                <Box mt={3} mr={5}>
                  <AddLocationIcon />
                </Box>
                <Box>
                  <Text mb={1}>Location</Text>
                  <Text color="gray.500" fontSize="15px">
                    {" "}
                    Nairobi, Kenya
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box>
            <Text fontSize="20px" mt={5}>
              Attendees
            </Text>
            <Text color="gray.500">88 people are attending this event</Text>
          </Box>
        </Flex>

        <Box textAlign="center">
          <Text mt={12} fontWeight="bold" fontSize="25px">
            Our speakers
          </Text>
          <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing="40px">
            {speakers.map((speaker) => (
              <Box
                mt={20}
                key={speaker.name}
                textAlign="center"
                borderRadius="lg"
                transition="all .3s ease"
                boxShadow={`0px 4px 1px ${boxShadowColor}`}
                position="relative"
                _hover={{
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.4)",
                  transform: "translate(0, -8px)",
                }}
              >
                <Avatar
                  src={speaker.imageSrc}
                  borderRadius="full"
                  boxSize="150px"
                  mb="4"
                />
                <Text fontSize="lg">{speaker.name}</Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
        <Stack
          align={{
            base: "center",
            md: "flex-start",
          }}
        >
          <Box px={5}>
            <Text mt={20} fontWeight="bold" fontSize="25px">
              Share with friends
            </Text>
          </Box>
          <Box>
            <Flex mb={100} px={5}>
              <Box mr={5}>
                <FacebookIcon />
              </Box>
              <Box>
                <InstagramIcon />
              </Box>
              <Box ml={5}>
                <LinkedInIcon />
              </Box>
              <Box ml={5}>
                <TwitterIcon />
              </Box>
            </Flex>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default EventPage;
