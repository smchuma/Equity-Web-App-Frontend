import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, Outlet } from "react-router-dom";
import useUser from "../../../hooks/useUser";

const Profile = () => {
  const links = [
    { label: "About", path: "/profile/about" },
    { label: "Inquiries", path: "/profile/inquiries" },
    { label: "Chapters", path: "/profile/chapters" },
    { label: "Badges", path: "/profile/badges" },
    { label: "Events", path: "/profile/events" },
  ];
  const { user } = useUser();

  const firstName = `${user.firstName
    .charAt(0)
    .toUpperCase()}${user.firstName.slice(1)}`;
  const lastName = `${user.lastName
    .charAt(0)
    .toUpperCase()}${user.lastName.slice(1)}`;

  return (
    <Stack direction="column">
      <Box
        borderColor="gray.300"
        boxShadow="0px 0px 10px rgba(0, 0, 0, 0.2)"
        position="relative"
        rounded="md"
      >
        <Box bg="#ffefe5" h="150px" w="100%" rounded="md" />
        <Avatar
          size="2xl"
          name={user.firstName + " " + user.lastName}
          src={""}
          position="absolute"
          top="60px"
          left="50%"
          transform="translateX(-50%)"
          zIndex="1"
          borderWidth="5px"
          borderColor="white"
        />
        <Flex align="center" p="4" justify="center">
          <Box>
            <Heading as="h3" size="lg" mt={8}>
              {firstName} {lastName}
            </Heading>
            <Flex align="center" justify="center" mt={3}>
              <IconButton
                aria-label="Facebook"
                icon={<FacebookIcon />}
                size="sm"
                colorScheme="facebook"
                variant="ghost"
              />
              <IconButton
                aria-label="Instagram"
                icon={<InstagramIcon />}
                size="sm"
                colorScheme="instagram"
                variant="ghost"
              />
              <IconButton
                aria-label="LinkedIn"
                icon={<LinkedInIcon />}
                size="sm"
                colorScheme="linkedin"
                variant="ghost"
              />
              <IconButton
                aria-label="Twitter"
                icon={<TwitterIcon />}
                size="sm"
                colorScheme="twitter"
                variant="ghost"
              />
            </Flex>
            <Button colorScheme="red" variant="outline" mt={3} w="100%">
              Edit Profile
            </Button>
          </Box>
        </Flex>
      </Box>
      <Stack
        direction="row"
        spacing={4}
        justify="center"
        p="4"
        borderRadius="20px"
        color="#a32a29"
        borderWidth="2px"
        borderColor="gray.100"
        bg="#ffefe5"
      >
        {links.map((link) => (
          <Button
            key={link.label}
            variant="link"
            flex="1"
            textAlign="center"
            color="#a32a29"
            backgroundColor="transparent"
            border="none"
            outline="none"
          >
            <Link to={link.path}>{link.label}</Link>
          </Button>
        ))}
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default Profile;
