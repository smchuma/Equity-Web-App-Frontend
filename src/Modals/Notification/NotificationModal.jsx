import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Badge,
  IconButton,
  useDisclosure,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  List,
  ListItem,
  useColorMode,
} from "@chakra-ui/react";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationModal = ({ notifications, onNotificationClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [unreadCount, setUnreadCount] = useState(0);
  const { colorMode } = useColorMode();

  const hoverBg = colorMode === "light" ? "gray.100" : "gray.600";

  useEffect(() => {
    setUnreadCount(
      notifications.filter((notification) => !notification.read).length
    );
  }, [notifications]);

  return (
    <Box>
      <Popover isOpen={isOpen} onClose={onClose}>
        <PopoverTrigger>
          <IconButton
            aria-label="Notifications"
            icon={
              <NotificationsIcon
                style={{
                  color: "#d97d48",
                }}
              />
            }
            variant="ghost"
            onClick={onOpen}
          />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <List spacing={1}>
              {notifications.map((notification) => (
                <ListItem
                  p={2}
                  // bg={notification.read ? "transparent" : hoverBg}
                  onClick={() => onNotificationClick(notification)}
                  key={notification.id}
                  _hover={{ bg: hoverBg, cursor: "pointer" }}
                >
                  {notification.text}
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {unreadCount > 0 && (
        <Badge
          color="white"
          bg="red"
          borderRadius="full"
          position="absolute"
          top="0"
          right="0"
        >
          {unreadCount}
        </Badge>
      )}
    </Box>
  );
};
NotificationModal.propTypes = {
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  onNotificationClick: PropTypes.func.isRequired,
};
export default NotificationModal;
