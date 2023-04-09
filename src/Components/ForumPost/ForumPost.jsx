import {
  Avatar,
  Box,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

const ForumPost = (post) => {
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(255, 255, 255, 0.2)"
  );

  function getTimeDifference(timestamp) {
    const now = new Date();
    const postTime = new Date(timestamp);
    const diffMilliseconds = now - postTime;
    const diffSeconds = diffMilliseconds / 1000;
    const diffMinutes = diffSeconds / 60;
    const diffHours = diffMinutes / 60;
    const diffDays = diffHours / 24;

    if (diffMinutes < 1) {
      return "just now";
    } else if (diffHours < 1) {
      return `${Math.round(diffMinutes)} minutes ago`;
    } else if (diffDays < 1) {
      return `${Math.round(diffHours)} hours ago`;
    } else {
      return `${Math.round(diffDays)} days ago`;
    }
  }
  const timePost = getTimeDifference(post.post.createdAt);

  return (
    <Box borderRadius={20} boxShadow={`0px 0px 4px ${boxShadowColor}`} p={3}>
      <Flex>
        <Stack align="center" mr="5">
          <Avatar
            size="xl"
            name={post.post.user.firstName + " " + post.post.user.lastName}
            src=""
          />
          <Text fontSize="sm" color="gray.500">
            {timePost}
          </Text>
        </Stack>
        <Stack>
          <Box p={3}>
            <p>{post.post.desc}</p>
          </Box>

          <Flex justify="space-between">
            <Flex gap={5}>
              <Flex>
                <CommentIcon
                  style={{
                    marginRight: "5px",
                  }}
                />
                <p>Comment</p>
              </Flex>
              <Flex align="center">
                <ThumbUpAltIcon
                  style={{
                    marginRight: "5px",
                  }}
                />
                <p>Like</p>
              </Flex>
            </Flex>

            <Flex align="center" gap={4}>
              <p>6 likes</p>
              <p>12 comments</p>
            </Flex>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
};

export default ForumPost;
