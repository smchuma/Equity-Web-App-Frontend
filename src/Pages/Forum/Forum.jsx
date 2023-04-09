import { Box, Flex, Stack } from "@chakra-ui/react";
import { ForumInput, ForumPost } from "../../Components";
import ForumRight from "./ForumRight";
import useApi from "../../hooks/useApi";

const Forum = () => {
  const { getPost, error, updateLikes } = useApi("posts");
  const { data } = getPost;

  if (!data) {
    return <p>stealing...</p>;
  }
  console.log(data);

  if (error) {
    return <div>Error: {error.message}</div>;
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
          <Stack spacing={10}>
            {data
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // Sort data by time in descending order
              .map((post) => (
                <Box key={post._id}>
                  <ForumPost post={post} updateLikes={updateLikes} />
                </Box>
              ))}
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
