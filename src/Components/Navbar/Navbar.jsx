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
  IconButton,
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

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={15}
        pos="sticky"
        top="0"
        zIndex="sticky"
        boxShadow="md"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {colorMode === "light" ? (
              <Image
                src="./assets/logo.png"
                alt="logo"
                boxSize="80px"
                objectFit="contain"
                loading="lazy"
              />
            ) : (
              <Image
                src="./assets/logoWhite.png"
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
                  <Avatar size={"md"} src="./assets/brendan.jpg" />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src="./assets/brendan.jpg" />
                  </Center>
                  <br />
                  <Center>
                    <p>Brendan Eich</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>
                    <IconButton
                      aria-label="profile"
                      icon={<PersonIcon />}
                      color="brand.secondary"
                      size="md"
                      mr="2"
                    />
                    My Profile
                  </MenuItem>
                  <MenuItem>
                    <IconButton
                      aria-label="settings"
                      icon={<SettingsIcon />}
                      color="brand.secondary"
                      size="md"
                      mr="2"
                    />
                    Account Settings
                  </MenuItem>
                  <MenuItem>
                    <IconButton
                      aria-label="help"
                      icon={<HelpIcon />}
                      color="brand.secondary"
                      size="md"
                      mr="2"
                    />
                    Get help
                  </MenuItem>
                  <MenuItem>
                    <IconButton
                      aria-label="logout"
                      icon={<LogoutIcon />}
                      color="brand.secondary"
                      size="md"
                      mr="2"
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
