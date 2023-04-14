import { Box, Stack } from "@chakra-ui/react";
import { Profile } from "../../Components";
import "./ProfilePage.scss";

const ProfilePage = () => {
  return (
    <Stack direction="row" mt="65px" w="100vw">
      <Stack direction="row" w="100vw" px={2}>
        <Box w="100%">
          <Profile />
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
