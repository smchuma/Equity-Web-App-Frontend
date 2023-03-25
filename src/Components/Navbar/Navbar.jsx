import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from "@chakra-ui/react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";

import ChatIcon from "@mui/icons-material/Chat";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        style={{
          paddingLeft: "25px",
          paddingRight: "120px",
        }}
        pos="fixed"
        top="0"
        zIndex="sticky"
        boxShadow="md"
        w="100%"
      >
        <Flex h="65px" alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {colorMode === "light" ? (
              <Image
                src={
                  "https://res.cloudinary.com/smchuma/image/upload/v1679673932/logo_awmyvm.png"
                }
                alt="logo"
                boxSize="80px"
                objectFit="contain"
                loading="lazy"
              />
            ) : (
              <Image
                src={
                  "https://res.cloudinary.com/smchuma/image/upload/v1679674079/logoWhite_xjpk3i.png"
                }
                alt="logo"
                boxSize="80px"
                objectFit="contain"
                loading="lazy"
              />
            )}
          </Box>

          <Flex>
            <Stack direction={"row"} spacing={7} align="center">
              <Box className="icons">
                <NotificationsIcon style={{ color: "#d97d48" }} />
                <span className="iconBadge">1</span>
              </Box>
              <Box className="icons">
                <ChatIcon style={{ color: "#d97d48" }} />
                <span className="iconBadge">5</span>
              </Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <DarkModeIcon />
                ) : (
                  <WbSunnyIcon style={{ color: "#d97d48" }} />
                )}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"md"}
                    src={
                      "https://www.nndb.com/people/095/000031002/brendan-eich-2-sized.jpg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://www.nndb.com/people/095/000031002/brendan-eich-2-sized.jpg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Brendan Eich</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <Link to="/profile">
                    <MenuItem>
                      <PersonIcon
                        style={{
                          color: "#d97d48",
                          marginRight: "10px",
                        }}
                      />
                      My Profile
                    </MenuItem>
                  </Link>
                  <MenuItem>
                    <SettingsIcon
                      style={{
                        color: "#d97d48",
                        marginRight: "10px",
                      }}
                    />
                    Account Settings
                  </MenuItem>
                  <MenuItem>
                    <HelpIcon
                      style={{
                        color: "#d97d48",
                        marginRight: "10px",
                      }}
                    />
                    Get help
                  </MenuItem>
                  <MenuItem>
                    <LogoutIcon
                      style={{
                        color: "#d97d48",
                        marginRight: "10px",
                      }}
                    />
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
