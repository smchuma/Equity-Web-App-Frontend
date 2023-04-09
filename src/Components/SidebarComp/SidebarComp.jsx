import { Flex } from "@chakra-ui/react";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import SearchIcon from "@mui/icons-material/Search";
import ForumIcon from "@mui/icons-material/Forum";
import EventIcon from "@mui/icons-material/Event";
import GroupsIcon from "@mui/icons-material/Groups";
import "./Sidebar.scss";
import SearchModal from "../../Modals/SearchModal/SearchModal";
import { NavItem } from "../../Components";

const SidebarComp = ({ id }) => {
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
      text: "Groups",
      link: "/groups",
    },
  ];

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      w="100%"
      h="100vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      align="center"
    >
      <Flex p="5%" flexDir="column" w="100%">
        {menuItem.map((menu) => (
          <NavItem
            key={menu.id}
            icon={menu.icon}
            title={menu.text}
            link={menu.link}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default SidebarComp;
