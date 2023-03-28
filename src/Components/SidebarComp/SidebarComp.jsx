import {
  Box,
  HStack,
  IconButton,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Sidebar.scss";
import { Link, NavLink } from "react-router-dom";
import SearchModal from "../SearchModal/SearchModal";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { useEffect } from "react";

const SidebarComp = ({ id }) => {
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

  const { collapseSidebar } = useProSidebar();
  const [isSmallerThanMd] = useMediaQuery("(max-width: 1000px)");

  useEffect(() => {
    collapseSidebar(isSmallerThanMd);
  }, [isSmallerThanMd, collapseSidebar]);
  return (
    <Box marginTop="65px" height="100vh" position="fixed">
      <Sidebar
        backgroundColor="#a32a29"
        width="12em"
        collapsed={isSmallerThanMd}
        h="100vh"
        style={{ height: "100vh", color: "white" }}
      >
        {menuItem.map((menu) => (
          <Menu key={menu.id}>
            <Link to={menu.link} className="link">
              <MenuItem icon={menu.icon}>
                <Text>{menu.text}</Text>
              </MenuItem>
            </Link>
          </Menu>
        ))}
      </Sidebar>
      ;
    </Box>
  );
};

export default SidebarComp;
