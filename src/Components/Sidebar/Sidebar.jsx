import { Box, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

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
      icon: <SearchIcon className="icon" />,
      text: "Search",
      link: "/search",
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
    <Box as="nav" bg="brand.primary" w="250px" h="100vh" pos="fixed">
      {menuItem.map((menu) => (
        <Link to={menu.link} key={menu.id}>
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
        </Link>
      ))}
    </Box>
  );
};

export default Sidebar;
