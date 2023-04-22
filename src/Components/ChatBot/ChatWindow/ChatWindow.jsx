import { styles } from "../Styles";
import { Box } from "@chakra-ui/react";

import ChatEngine from "./ChatEngine";

const ChatWindow = (props) => {
  return (
    <Box
      className="transition-5"
      style={{
        ...styles.supportWindow,
        // eslint-disable-next-line react/prop-types
        ...{ opacity: props.visible ? "1" : "0" },
      }}
    >
      <Box overflow="hidden" h="100%">
        <ChatEngine />
      </Box>
    </Box>
  );
};

export default ChatWindow;
