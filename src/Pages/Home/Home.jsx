import { Box, Flex } from "@chakra-ui/react";
import { Post, RightBar } from "../../Components";
import { Posts } from "../../dummyData";
import "./Home.scss";
import useAuth from "../../hooks/useAuth";

const Home = () => {
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
        <Box>
          {Posts.map((post) => (
            <Post key={post.id} post={post} />
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
