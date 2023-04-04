import { Box, Stack } from "@chakra-ui/react";
import { Post, RightBar } from "../../Components";
import { Posts } from "../../dummyData";
import "./Home.scss";

const Home = () => {
  return (
    <Box className="Home">
      {/* <Stack direction="row" w="100%">
        <Box w="calc(100%-80%)" mt="40px">
          {Posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Box>
        <Box w="80%" className="rightBar">
          <RightBar />
        </Box>
      </Stack> */}
      <h1>home</h1>
    </Box>
  );
};

export default Home;
