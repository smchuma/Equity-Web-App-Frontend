import { Box, Flex } from "@chakra-ui/react";
import { Post, RightBar } from "../../Components";
import { Posts } from "../../dummyData";

const Home = () => {
  return (
    <Flex>
      <Box flex="1" px={12} py={10}>
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
      <Box flex="0.5" py={10} pos="sticky">
        <RightBar />
      </Box>
    </Flex>
  );
};

export default Home;
