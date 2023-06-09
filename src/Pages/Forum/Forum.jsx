import { Box, Flex, Stack } from "@chakra-ui/react";
import { ForumInput, ForumPost, SkeletonLoader } from "../../Components";
import ForumRight from "./ForumRight";
import useApi from "../../hooks/useApi";
import ChatBot from "../../Components/ChatBot/ChatBot";

const Forum = () => {
  const { posts, isLoading } = useApi();

  if (!posts) {
    return (
      <SkeletonLoader
        width="700px"
        height="100vh"
        marginLeft={150}
        marginTop="50px"
        padding={0}
      />
    );
  }

  return (
    <>
      <Flex justifyContent="center">
        <Box
          width="100%"
          mt="50px"
          px={{
            base: 10,
            lg: "150px",
          }}
        >
          <Stack w="100%">
            <Flex w="100%" flexDir="column" alignItems="center" mb={5}>
              <ForumInput />
            </Flex>
            <Flex w="100%" flexDir="column" alignItems="center" gap={12}>
              {isLoading ? (
                <SkeletonLoader
                  width="700px"
                  height="100vh"
                  marginLeft={150}
                  marginTop="50px"
                  padding={0}
                />
              ) : (
                posts &&
                posts
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort data by time in descending order
                  .map((post) => (
                    <Box align="center" w="100%" key={post._id}>
                      <ForumPost post={post} isLoading={isLoading} />
                    </Box>
                  ))
              )}
            </Flex>
          </Stack>
        </Box>
        <Box
          mt="-50px"
          paddingX={10}
          flexBasis="400px"
          flexGrow={0}
          flexShrink={0}
          display={{ base: "none", lg: "block" }}
        >
          <ForumRight />
        </Box>
      </Flex>
      <Box>
        <ChatBot />
      </Box>
    </>
  );
};

export default Forum;
