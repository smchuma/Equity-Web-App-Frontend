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
        mt="50px"
        ml={{
          base: "150px",
          md: "100px",
          lg: "0px",
        }}
      >
        <Stack>
          <Box mb={5}>
            <ForumInput />
          </Box>
          <Stack w="100%" spacing={10}>
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
                  <Box key={post._id}>
                    <ForumPost post={post} />
                  </Box>
                ))
            )}
          </Stack>
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
