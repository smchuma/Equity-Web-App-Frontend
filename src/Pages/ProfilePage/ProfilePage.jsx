import { Box, Flex } from "@chakra-ui/react";
import { Profile, RightBar } from "../../Components";

const ProfilePage = () => {
  return (
    <Flex
      style={{
        marginRight: "350px",
      }}
    >
      <Box
        flex="1"
        style={{
          marginLeft: "30px",
          marginRight: "150px",
          marginTop: "40px",
        }}
      >
        <Profile />
      </Box>
      <Box
        flex="0.5"
        pos="fixed"
        right="0"
        w="350px"
        style={{
          marginTop: "40px",
          marginRight: "120px",
        }}
      >
        <RightBar />
      </Box>
    </Flex>
  );
};

export default ProfilePage;
