import { Box, Flex } from "@chakra-ui/react";
import { FeedInput, Post, RightBar, SkeletonLoader } from "../../Components";
import useFeed from "../../hooks/useFeed";
import useUser from "../../hooks/useUser";
import "./Home.scss";

const Home = () => {
  const { feeds } = useFeed();
  const { user } = useUser();

  if (!feeds) {
    return <SkeletonLoader width="100%" height="100px" />;
  }

  return (
    <Flex justifyContent="center">
      <Box
        mt="50px"
        flex="1"
        px={{
          base: 10,
          lg: "150px",
        }}
      >
        {user && user.roles && user.roles[0].User === 1984 && (
          <Box mb="20px">
            <FeedInput />
          </Box>
        )}
        <Box>
          {feeds &&
            feeds
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((feed) => (
                <Box key={feed._id}>
                  <Post feed={feed} />
                </Box>
              ))}
        </Box>
      </Box>
      <Box
        mt="50px"
        paddingX={10}
        flexBasis="400px"
        flexGrow={0}
        flexShrink={0}
        display={{ base: "none", lg: "block" }}
      >
        <RightBar />
      </Box>
    </Flex>
  );
};

export default Home;
