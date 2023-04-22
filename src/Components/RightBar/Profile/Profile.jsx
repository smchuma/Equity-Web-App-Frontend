import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link, Outlet } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { AvatarModal, EditProfileModal, ProfileBanner } from "../../../Modals";

const Profile = () => {
  const links = [
    { label: "About", path: "/profile/about" },
    { label: "Inquiries", path: "/profile/inquiries" },
    { label: "Chapters", path: "/profile/chapters" },
    { label: "Badges", path: "/profile/badges" },
    { label: "Events", path: "/profile/events" },
  ];
  const { user } = useUser();
  const borderTopColor = useColorModeValue("#EAEAEA", "#2d2d2d");
  const firstName = `${user.firstName
    .charAt(0)
    .toUpperCase()}${user.firstName.slice(1)}`;
  const lastName = `${user.lastName
    .charAt(0)
    .toUpperCase()}${user.lastName.slice(1)}`;

  return (
    <Stack direction="column">
      <Box w="100%" mb={4}>
        <ProfileBanner />
        <Flex
          justify="space-between"
          align="center"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Flex
            align="center"
            flexDirection={{
              base: "column",
              md: "row",
            }}
          >
            <Box
              ml={{
                base: 0,
                md: 5,
              }}
              mt="-30px"
            >
              <AvatarModal />
            </Box>
            <Box
              ml={{
                base: 0,
                md: 3,
              }}
            >
              <Heading
                fontSize="2xl"
                mt={{
                  base: 2,
                  md: 0,
                }}
                size="lg"
              >
                {firstName} {lastName}
              </Heading>
              <Flex
                justify={{
                  base: "center",
                  md: "start",
                }}
                align="center"
                mt={3}
              >
                <IconButton
                  aria-label="Facebook"
                  icon={<FacebookIcon />}
                  onClick={() => {
                    const facebookLink = user?.followers[0]?.facebook;
                    facebookLink ? window.open(facebookLink, "_blank") : "";
                  }}
                  size="sm"
                  colorScheme="facebook"
                  variant="ghost"
                />
                <IconButton
                  aria-label="Instagram"
                  icon={
                    <InstagramIcon
                      onClick={() => {
                        const instagramLink = user?.followers[0]?.instagram;
                        instagramLink
                          ? window.open(instagramLink, "_blank")
                          : "";
                      }}
                    />
                  }
                  size="sm"
                  colorScheme="instagram"
                  variant="ghost"
                />
                <IconButton
                  aria-label="LinkedIn"
                  icon={<LinkedInIcon />}
                  onClick={() => {
                    const linkedinLink = user?.followers[0]?.linkedIn;
                    linkedinLink ? window.open(linkedinLink, "_blank") : "";
                  }}
                  size="sm"
                  colorScheme="linkedin"
                  variant="ghost"
                />
                <IconButton
                  aria-label="Twitter"
                  icon={<TwitterIcon />}
                  onClick={() => {
                    const twitterLink = user?.followers[0]?.twitter;
                    twitterLink ? window.open(twitterLink, "_blank") : "";
                  }}
                  size="sm"
                  colorScheme="twitter"
                  variant="ghost"
                />
              </Flex>
            </Box>
          </Flex>
          <Box>
            <EditProfileModal />
          </Box>
        </Flex>
      </Box>
      <Stack
        direction="row"
        spacing={4}
        justify="center"
        p="4"
        color="#a32a29"
        borderColor="gray.100"
        borderTop={`2px solid ${borderTopColor}`}
      >
        {links.map((link) => (
          <Button
            key={link.label}
            variant="link"
            flex="1"
            textAlign="center"
            backgroundColor="transparent"
            border="none"
            outline="none"
            height="50px"
            _hover={{
              color: "white",
              backgroundColor: "brand.tomato",
              borderRadius: "10px",
            }}
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
