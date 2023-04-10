import { Box, Flex, Stack } from "@chakra-ui/react";
import { ForumInput, ForumPost, SkeletonLoader } from "../../Components";
import ForumRight from "./ForumRight";
import useApi from "../../hooks/useApi";

const Forum = () => {
  const { posts, isLoading } = useApi();

  if (!posts) {
    return <SkeletonLoader width="100%" height="100px" />;
  }

  return (
    <Flex justifyContent="center">
      <Box
        width="100%"
        mt="50px"
        ml={{
          base: "150px",
          md: "100px",
          lg: "0px",
        }}
      >
        <Stack w="100%">
          <Flex w="100%" flexDir="column" alignItems="center" mb={5}>
            <ForumInput />
          </Flex>
          <Flex
            w="100%"
            flexDir="column"
            alignItems="center"
            h="100vh"
            gap={12}
          >
            {isLoading ? (
              <SkeletonLoader
                isCircle
                size="100px"
                width="100%"
                height="100px"
              />
            ) : (
              posts &&
              posts
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort data by time in descending order
                .map((post) => (
                  <Box align="center" w="100%" key={post._id}>
                    <ForumPost post={post} />
                  </Box>
                ))
            )}
          </Flex>
        </Stack>
      </Box>
      <Box
        mt="50px"
        paddingX={10}
        flexBasis="400px"
        flexGrow={0}
        flexShrink={0}
        display={{ base: "none", lg: "block" }}
      >
        <ForumRight />
      </Box>
    </Flex>
  );
};

export default Forum;
