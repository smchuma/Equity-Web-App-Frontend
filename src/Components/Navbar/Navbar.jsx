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
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { MessageModal, NotificationModal } from "../../Modals";
import useLogout from "../../hooks/useLogout";
import useUser from "../../hooks/useUser";
import "./Navbar.scss";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [showNotification, setShowNotification] = useState(false);
  const logout = useLogout();
  const { user } = useUser();

  const signOut = async () => {
    await logout();
    Navigate("/login");
  };

  const handleNotificationClick = () => {
    setShowNotification(!showNotification);
  };

  const notifications = [
    { id: 1, text: "New message from John" },
    { id: 2, text: "You have a meeting at 2pm" },
    { id: 3, text: "Your order has been shipped" },
  ];

  // const firstName = `${user.firstName
  //   .charAt(0)
  //   .toUpperCase()}${user.firstName.slice(1)}`;
  // const lastName = `${user.lastName
  //   .charAt(0)
  //   .toUpperCase()}${user.lastName.slice(1)}`;

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        paddingLeft="25px"
        paddingRight="120px"
        cursor="pointer"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        boxShadow="md"
        w="100%"
        h="65px"
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
                <NotificationModal
                  notifications={notifications}
                  onNotificationClick={handleNotificationClick}
                />
              </Box>
              <Box className="icons">
                <MessageModal
                  notifications={notifications}
                  onNotificationClick={handleNotificationClick}
                />
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
                  as="div"
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                >
                  <Avatar
                    size={"md"}
                    // name={`${user.firstName}`}
                    // src={user.profilePicture}
                    sx={{
                      border: "2px solid ",
                      borderColor: "gray.300",
                    }}
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    {/* <Avatar size={"2xl"} name={user.firstName} src={""} /> */}
                  </Center>
                  <br />
                  <Center>{/* <p>{`${firstName} ${lastName}`}</p> */}</Center>
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
                  <MenuItem onClick={signOut}>
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
