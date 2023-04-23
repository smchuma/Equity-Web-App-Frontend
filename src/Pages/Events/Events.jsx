import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    name: "Innovate with Equity Bank: A Tech and Finance Conference",
    date: "June 16",
    imageUrl:
      "https://res.cloudinary.com/egfscholar/image/upload/v1682196211/pic_qifix0.png",
    description:
      "Join Equity Bank for a one-of-a-kind conference that brings together leading tech experts and finance professionals. This event is perfect for anyone interested in the intersection of technology and finance, and is designed to inspire innovation, creativity and collaboration. You'll have the opportunity to network with other attendees, attend thought-provoking talks and workshops, and gain valuable insights into the latest trends in fintech.",
  },
  {
    id: 2,
    name: "Community Connect: A Gathering of Social Leaders",
    date: "August 12",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    description:
      "Equity Bank is proud to host Community Connect, a gathering of leaders from across Kenya's social sector. This event is designed to bring together individuals and organizations who are passionate about creating positive change in their communities. You'll have the opportunity to network with other attendees, hear from inspiring speakers, and learn about the latest trends and innovations in social impact.",
  },
  {
    id: 3,
    name: "Equity Bank Hackathon: Innovate for the Future",
    date: "July 23",
    imageUrl:
      "https://img.freepik.com/free-vector/digital-global-connection-network-technology-background_1017-23324.jpg?w=1380&t=st=1682256725~exp=1682257325~hmac=fc3574e8064b6742c9e820bbe416f2d35b3e8fd21aa1a2957066f4f25555cf34",
    description:
      "Are you a creative problem solver with a passion for technology and finance? Then join Equity Bank for a hackathon designed to push the boundaries of what's possible. You'll have the opportunity to work with other participants to develop cutting-edge solutions to some of the most pressing challenges facing the banking industry today. Whether you're a developer, designer, or business strategist, this event is a must-attend.",
  },
  {
    id: 4,
    name: "Banking on the Future: A Finance and Investment Seminar",
    date: "June 2",
    imageUrl:
      "https://images.unsplash.com/photo-1511883040705-6011fad9edfc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80",
    description:
      "Are you interested in learning more about the world of finance and investing? Then join Equity Bank for an informative seminar that will provide valuable insights into these topics. You'll hear from leading experts in the field, learn about the latest trends and strategies, and have the opportunity to network with other attendees who share your interests.",
  },
  {
    id: 5,
    name: "Women in Finance: A Networking Event",
    date: "May 24",
    imageUrl:
      "https://img.freepik.com/free-photo/closeup-shot-beautiful-young-ladies-using-laptop_181624-44767.jpg?w=996&t=st=1682257265~exp=1682257865~hmac=ac59a807304bdcfa02ecb38509deaa51a5e71a41f511632965f20d49b3501ca4",
    description:
      "Equity Bank is proud to support women in finance and is excited to host a networking event designed specifically for female professionals in this field. You'll have the opportunity to connect with other women who are making a difference in the world of finance, hear from inspiring speakers, and learn about the latest trends and innovations in this exciting industry.",
  },
  {
    id: 6,
    name: "Digital Disruptors: A Tech and Finance Panel Discussion",
    date: "May 12",
    imageUrl:
      "https://img.freepik.com/free-photo/business-network_53876-123669.jpg?w=740&t=st=1682257372~exp=1682257972~hmac=fc9c95edef5184148b6d37b451cd17365655fe9b015fc255fe197e3d3ad808d2https://img.freepik.com/free-photo/business-network_53876-123669.jpg?w=740&t=st=1682257372~exp=1682257972~hmac=fc9c95edef5184148b6d37b451cd17365655fe9b015fc255fe197e3d3ad808d2",
    description:
      " Join Equity Bank for an engaging panel discussion featuring leading voices in the tech and finance industries. This event is designed to explore the ways in which digital disruption is transforming banking and finance, and how organizations can stay ahead of the curve. You'll hear from experts on topics such as blockchain, AI, and cybersecurity, and have the opportunity to ask questions and share your own insights.",
  },
  {
    id: 7,
    name: "Investing for Impact: A Socially Responsible Investment Seminar",
    date: "July 12",
    imageUrl:
      "https://img.freepik.com/free-photo/financial-business-meeting_53876-94816.jpg?w=740&t=st=1682257459~exp=1682258059~hmac=615da720ad12c3c7bc058dcaefda6d8b6073b50832613683945652d06dc5d9eb",
    description:
      "Are you interested in investing in a way that creates positive social and environmental impact? Then join Equity Bank for a seminar focused on socially responsible investing. You'll hear from experts in the field, learn about the latest trends and strategies, and have the opportunity to network with other attendees who share your commitment to creating a better world.",
  },
];

const Events = () => {
  const color = useColorModeValue("gray.700", "gray.50");
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.4)",
    "rgba(255, 255, 255, 0.4)"
  );

  return (
    <Stack align="center" color={color} px={10} py={8}>
      <Box w="100%" borderRadius="md" overflow="hidden" mb={8}>
        <Box
          h="300px"
          w="100%"
          sx={{
            backgroundImage: `url(https://res.cloudinary.com/egfscholar/image/upload/v1682250608/banner2_xbqrrl.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box p={4}>
          <Heading mt={5} as="h1" size="lg" textAlign="center" mb={4}>
            Upcoming Events
          </Heading>
          <Text fontSize="lg" textAlign="center" mb={4}>
            Dont Miss out on these upcoming events
          </Text>
        </Box>
      </Box>

      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={{ base: 4, md: 10 }}
        mx={{ base: -2, md: 0 }}
      >
        {events.map((event) => (
          <Link to={`/events/${event.id}`} key={event.id}>
            <Box
              mb={{ base: 4, md: 0 }}
              _hover={{
                boxShadow: `0px 1px 2px ${boxShadowColor}`,
                cursor: "pointer",
              }}
              borderRadius="md"
              overflow="hidden"
              boxShadow={`0px 0px 2px ${boxShadowColor}`}
            >
              <Image
                w="100%"
                maxH={{
                  base: "200px",
                  md: "200px",
                }}
                objectFit="cover"
                boxSize={{
                  base: "100%",
                  md: "600px",
                }}
                src={event.imageUrl}
                alt={event.name}
              />
              <Flex p={4}>
                <Box p={5}>
                  <Text color="brand.secondary" textAlign="center">
                    {event.date}
                  </Text>
                </Box>
                <Stack>
                  <Box>
                    <Text size="md">{event.name}</Text>
                  </Box>
                  <Box>
                    <Text color="gray.500" fontSize="13px">
                      {event.description.substring(0, 120)}...
                    </Text>
                  </Box>
                  <Flex align="center" px={2} justify="space-between">
                    <Box>
                      <Text color="gray.400" fontSize="13px">
                        12 Attendees
                      </Text>
                    </Box>
                    <Box>
                      <IosShareIcon fontSize="13px" />
                    </Box>
                  </Flex>
                </Stack>
              </Flex>
            </Box>
          </Link>
        ))}
      </Grid>
    </Stack>
  );
};
export default Events;
