import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Sidebar.scss";
import { NavLink } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";

const Sidebar = ({ id }) => {
  const menuItem = [
    {
      id: 1,
      icon: <RssFeedIcon className="icon" />,
      text: "Feed",
      link: "/",
    },
    {
      id: 2,
      icon: (
        <SearchModal>
          <SearchIcon className="icon" />
        </SearchModal>
      ),
      text: <SearchModal>Search</SearchModal>,
    },
    {
      id: 3,
      icon: <ForumIcon className="icon" />,
      text: "Forum",
      link: "/forum",
    },
    {
      id: 4,
      icon: <EventIcon className="icon" />,
      text: "Events",
      link: "/events",
    },
    {
      id: 5,
      icon: <GroupsIcon className="icon" />,
      text: "Groups",
      link: "/groups",
    },
  ];
  return (
    <Box as="nav" bg="brand.primary" w="250px" h="100vh" pos="fixed" top="65px">
      {menuItem.map((menu) => (
        <NavLink
          to={menu.link}
          key={menu.id}
          style={(isActive) => ({
            color: isActive ? "green" : "blue",
          })}
        >
          <VStack spacing="5" w="100%" px={5} py={5}>
            <HStack
              spacing="2"
              w="100%"
              _hover={{ bg: "brand.primaryDark", borderRadius: "10px" }}
            >
              <IconButton
                aria-label="feed"
                icon={menu.icon}
                size="md"
                bg="transparent"
              />
              <Text color="white" fontSize="md">
                {menu.text}
              </Text>
            </HStack>
          </VStack>
        </NavLink>
      ))}
    </Box>
  );
};

export default Sidebar;
