import {
  Box,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { Messages } from "../../Components";

const Conversations = () => {
  return (
    <Stack h="100%" maxH="100vh" w="auto">
      <Box
        w="100%"
        boxShadow="md"
        borderWidth="1px"
        borderColor="subtleBorderColor"
      >
        <Text py={2} px={4} color="brand.secondary">
          <b>#Forum name</b>
        </Text>
      </Box>
      <Box
        w="100%"
        sx={{
          flexGrow: 1,
        }}
      >
        <Messages />
      </Box>
      <Box p={4} width="100%">
        <Stack direction="row" w="100%">
          <InputGroup>
            <InputLeftAddon bg="brand.secondary">
              <EmojiEmotionsIcon
                style={{
                  color: "white",
                }}
              />
            </InputLeftAddon>
            <Input
              placeholder="Type a message..."
              w="100%"
              py={4}
              variant="filled"
              borderRadius="md"
              sx={{
                "&::placeholder": {
                  color: "brand.primary",
                },
              }}
            />
            <InputRightAddon cursor="pointer" bg="brand.secondary">
              <SendIcon
                style={{
                  color: "white",
                }}
              />
            </InputRightAddon>
          </InputGroup>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversations;
