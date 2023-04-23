import { Box, Flex } from "@chakra-ui/react";
import { Profile, RightBar } from "../../Components";

const ProfilePage = () => {
  return (
    <Flex justifyContent="center">
      <Box
        width="100%"
        mt="50px"
        mx={{
          base: 0,
          lg: 10,
        }}
      >
        <Box w="100%">
          <Profile />
        </Box>
      </Box>
      <Box
        mt="-50px"
        paddingX={10}
        flexBasis="400px"
        flexGrow={0}
        flexShrink={0}
        display={{ base: "none", xl: "block" }}
      >
        <RightBar />
      </Box>
    </Flex>
  );
};

export default ProfilePage;
