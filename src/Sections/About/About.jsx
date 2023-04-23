import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SchoolIcon from "@mui/icons-material/School";
import CakeIcon from "@mui/icons-material/Cake";
import BadgeIcon from "@mui/icons-material/Badge";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";

const About = () => {
  const { allUsers } = useUser();
  const { id } = useParams();
  const dyUser = allUsers?.find((user) => user?._id === id);
  const bgColor = useColorModeValue("#f5f5f5", "#171c28");

  return (
    <Stack pb="100px" gap={5} w="100%">
      <Box p={3} borderRadius={20} bg={bgColor}>
        <Text px={3} fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
          About
        </Text>
        <Box p={2}>
          <Flex mb={5} color={dyUser?.desc ? "white" : "gray"} align="center">
            <Text ml={2}>{dyUser?.desc || "About information"}</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <CakeIcon style={{ fontSize: "30px" }} />
            <Text color={dyUser?.birthday ? "white" : "gray"} ml={2}>
              {dyUser?.birthday || "Birthday Date"}
            </Text>
          </Flex>
          <Flex mt={5} align="center" mb={2}>
            <BadgeIcon style={{ fontSize: "30px" }} />
            <Text color={dyUser?.birthday ? "white" : "gray"} ml={2}>
              {dyUser?.birthday || "Current position"}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box p={3} borderRadius={20} bg={bgColor}>
        <Text px={3} fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
          Contact info
        </Text>
        <Box p={2}>
          <Flex mb={5} align="center">
            <EmailIcon style={{ fontSize: "30px" }} />
            <Text ml={2}>{dyUser?.email}</Text>
          </Flex>
          <Flex align="center" mb={2}>
            <LocalPhoneIcon style={{ fontSize: "30px" }} />
            <Text color={dyUser?.phone ? "white" : "gray"} ml={2}>
              {dyUser?.phone || "Phone number"}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box p={3} borderRadius={20} bg={bgColor}>
        <Text px={3} fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
          Education
        </Text>
        <Box p={2}>
          <Flex align="center" mb={2}>
            <SchoolIcon style={{ fontSize: "30px" }} />
            <Text color={dyUser?.education ? "white" : "gray"} ml={2}>
              {dyUser?.education || "School name"}
            </Text>
          </Flex>
        </Box>
      </Box>
      <Box p={3} borderRadius={20} bg={bgColor}>
        <Text fontSize="2xl" fontWeight="bold" color="blue.500" mb={4}>
          Location
        </Text>
        <Box p={2}>
          <Text>Address</Text>
          <Flex align="center" mb={2}>
            <SchoolIcon style={{ fontSize: "30px" }} />
            <Text color={dyUser?.city ? "white" : "gray"} ml={2}>
              {dyUser?.city || "City name"}
            </Text>
          </Flex>
        </Box>
      </Box>
    </Stack>
  );
};

export default About;
