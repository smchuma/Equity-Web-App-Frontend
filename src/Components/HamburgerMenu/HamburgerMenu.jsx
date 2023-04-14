import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
} from "@chakra-ui/react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import SearchModal from "../../Modals/SearchModal/SearchModal";
import { Link } from "react-router-dom";

const HamburgerMenu = ({
  onOpen,
  placement,
  setPlacement,
  onClose,
  isOpen,
}) => {
  const menuItem = [
    {
      id: 1,
      icon: <RssFeedIcon />,
      text: "Feed",
      link: "/",
    },
    {
      id: 2,
      icon: (
        <SearchModal>
          <SearchIcon />
        </SearchModal>
      ),
      text: <SearchModal>Search</SearchModal>,
    },
    {
      id: 3,
      icon: <ForumIcon />,
      text: "Forum",
      link: "/forum",
    },
    {
      id: 4,
      icon: <EventIcon />,
      text: "Events",
      link: "/events",
    },
    {
      id: 5,
      icon: <GroupsIcon />,
      text: "Chapters",
      link: "/groups",
    },
  ];
  return (
    <>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody align="center" justifyContent="center">
            <Flex p="5%" direction="column" align="center" gap={12} mt={10}>
              {menuItem.map((item) => (
                <Box d="flex" key={item.id} w="100%" align="center">
                  <Link to={item.link}>
                    <Flex
                      align="center"
                      p={3}
                      _hover={{
                        textDecor: "none",
                        backgroundColor: "brand.tomato",
                        color: "white",
                        borderRadius: "10px",
                      }}
                    >
                      <Box color="brand.secondary" mr={5}>
                        {item.icon}
                      </Box>
                      <Text>{item.text}</Text>
                    </Flex>
                  </Link>
                </Box>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
