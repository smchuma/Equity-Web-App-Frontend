import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { FeedInput, Post, RightBar, SkeletonLoader } from "../../Components";
import useFeed from "../../hooks/useFeed";
import useUser from "../../hooks/useUser";
import ChatBot from "../../Components/ChatBot/ChatBot";

const Home = () => {
  const { feeds, isLoading } = useFeed();
  const { user } = useUser();
  const [isLargerThanLg] = useMediaQuery("(min-width: 992px)");

  if (!feeds) {
    return (
      <SkeletonLoader
        width="900px"
        height="70vh"
        marginLeft={22}
        marginTop="65px"
        padding={50}
      />
    );
  }

  return (
    <>
      {isLoading ? (
        <SkeletonLoader
          width="900px"
          height="70vh"
          marginLeft={22}
          padding={50}
        />
      ) : (
        <>
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
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((feed) => (
                      <Box key={feed._id}>
                        <Post feed={feed} />
                      </Box>
                    ))}
              </Box>
            </Box>
            {isLargerThanLg && (
              <Box
                mt="50px"
                paddingX={12}
                flexBasis="400px"
                flexGrow={0}
                flexShrink={0}
                align="center"
                w="100%"
              >
                <RightBar />
              </Box>
            )}
          </Flex>
          <Box>
            <ChatBot />
          </Box>
        </>
      )}
    </>
  );
};

export default Home;
