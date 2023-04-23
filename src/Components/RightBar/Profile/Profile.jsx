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
import { NavLink, Outlet, useParams } from "react-router-dom";
import useUser from "../../../hooks/useUser";
import { AvatarModal, EditProfileModal, ProfileBanner } from "../../../Modals";
import "./Profile.scss";
const Profile = () => {
  const { id } = useParams();
  const { user, allUsers } = useUser();
  const dyUser = allUsers?.find((user) => user?._id === id);

  const links = [
    { label: "About", path: `/profile/${dyUser?._id}/about` },
    { label: "Inquiries", path: `/profile/${dyUser?._id}/inquiries` },
    { label: "Chapters", path: `/profile/${dyUser?._id}/chapters` },
    { label: "Badges", path: `/profile/${dyUser?._id}/badges` },
    { label: "Events", path: `/profile/${dyUser?._id}/events` },
  ];

  const borderTopColor = useColorModeValue("#e1e1e1", "#2d2d2d");
  const color = useColorModeValue("gray.500", "white");
  const firstName = `${dyUser?.firstName
    .charAt(0)
    .toUpperCase()}${dyUser?.firstName.slice(1)}`;
  const lastName = `${dyUser?.lastName
    .charAt(0)
    .toUpperCase()}${dyUser?.lastName.slice(1)}`;

  return (
    <Stack direction="column">
      <Box w="100%" mb={4}>
        <ProfileBanner dyUser={dyUser} />
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
              <AvatarModal dyUser={dyUser} />
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
                    const facebookLink = dyUser?.followers[0]?.facebook;
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
                        const instagramLink = dyUser?.followers[0]?.instagram;
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
                    const linkedinLink = dyUser?.followers[0]?.linkedIn;
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
                    const twitterLink = dyUser?.followers[0]?.twitter;
                    twitterLink ? window.open(twitterLink, "_blank") : "";
                  }}
                  size="sm"
                  colorScheme="twitter"
                  variant="ghost"
                />
              </Flex>
            </Box>
          </Flex>
          <Box>{user?._id === dyUser?._id && <EditProfileModal />}</Box>
        </Flex>
      </Box>
      <Stack
        direction="row"
        spacing={4}
        justify="center"
        p="4"
        borderColor="gray.100"
        borderTop={`2px solid ${borderTopColor}`}
      >
        {links.map((link) => (
          <NavLink
            to={link.path}
            key={link.label}
            style={{
              width: "100%",
              textAlign: "center",
            }}
            className={({ isActive }) => {
              return isActive ? "active" : "";
            }}
          >
            <Button
              variant="link"
              backgroundColor="transparent"
              border="none"
              outline="none"
              height="50px"
              color={color}
              w="100%"
              _hover={{
                backgroundColor: "#a9a9a9",
                borderRadius: "10px",
              }}
            >
              {link.label}
            </Button>
          </NavLink>
        ))}
      </Stack>
      <Outlet />
    </Stack>
  );
};

export default Profile;
