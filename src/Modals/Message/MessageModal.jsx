import { useState, useEffect } from "react";
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
import ChatIcon from "@mui/icons-material/Chat";

const MessageModal = ({ notifications, onNotificationClick }) => {
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
              <ChatIcon
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
export default MessageModal;
