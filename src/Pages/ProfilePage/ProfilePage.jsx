import { Box, Stack } from "@chakra-ui/react";
import { Profile, RightBar } from "../../Components";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <Stack direction="row" mt="65px" w="100%" className="Home">
      <Stack direction="row" w="100%" px={2}>
        <Box w="100%">
          <Profile />
        </Box>
        <Box w="35%" className="rightBar" pr={2}>
          <RightBar />
          <h1>fff</h1>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
