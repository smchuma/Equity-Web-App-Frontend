import { Avatar, AvatarBadge, Box, Stack, Text } from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import SkeletonLoader from "../SkeletonLoader/SkeletonLoader";
import PropTypes from "prop-types";

const SuggestedUser = ({ isOnline }) => {
  const { user, allUsers, allLoading } = useUser();

  if (!user || !allUsers)
    return (
      <SkeletonLoader
        width="400px"
        height="70vh"
        marginLeft={0}
        marginTop="-30px"
        padding={0}
      />
    );

  const filteredUsers = allUsers.filter((allUser) => allUser._id !== user._id);

  return (
    <>
      {allLoading ? (
        <SkeletonLoader
          width="400px"
          height="70vh"
          marginLeft={0}
          marginTop="-30px"
          padding={0}
        />
      ) : (
        <>
          <Box>
            {filteredUsers.slice(0, 6).map((user) => (
              <Stack
                key={user._id}
                direction="row"
                spacing={4}
                align="center"
                mb={10}
              >
                <Avatar
                  size="md"
                  name={user.firstName + " " + user.lastName}
                  src={user?.profilePicture}
                >
                  {isOnline && <AvatarBadge boxSize="1em" bg="green.500" />}
                </Avatar>
                <Text>{user.firstName + " " + user.lastName}</Text>
              </Stack>
            ))}
          </Box>
        </>
      )}
    </>
  );
};
SuggestedUser.propTypes = {
  isOnline: PropTypes.bool,
};

export default SuggestedUser;
