import { Box, Flex } from "@chakra-ui/react";
import { Post, RightBar } from "../../Components";
import { Posts } from "../../dummyData";

const Home = () => {
  return (
    <Flex
      sx={{
        marginRight: "350px",
        paddingTop: "65px",
      }}
    >
      <Box
        flex="1"
        style={{
          marginLeft: "200px",
          marginRight: "250px",
          marginTop: "40px",
        }}
      >
        {Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Box>
      <Box
        flex="0.5"
        pos="fixed"
        right="0"
        w="350px"
        style={{
          marginTop: "40px",
          marginRight: "120px",
        }}
      >
        <RightBar />
      </Box>
    </Flex>
  );
};

export default Home;
