import {
  Avatar,
  Box,
  Button,
  Flex,
  MenuList,
  MenuItem,
  MenuButton,
  Stack,
  Text,
  Textarea,
  Menu,
  useColorModeValue,
} from "@chakra-ui/react";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useApi from "../../hooks/useApi";

import useUser from "../../hooks/useUser";
import { useState } from "react";

const ForumPost = (post) => {
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { deletePost, likePost, addComment } = useApi();
  const userId = post.post.userId;
  const { user } = useUser();
  const isLiked = post.post.likes.includes(user._id);

  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(255, 255, 255, 0.2)"
  );
  const bgColor = useColorModeValue("gray.100", "gray.700");

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

  const handleLikeClick = () => {
    if (!isLiked) {
      likePost.mutate({ postId: post.post._id, userId: post.post.userId });
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost.mutate(post.post._id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    addComment.mutate({
      postId: post.post._id,
      comment,
    });
    setComment("");
  };

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
          <Flex justify="space-between">
            <Box p={3}>
              <p>{post.post.desc}</p>
            </Box>
            {userId === user._id && (
              <Text onClick={handleDelete}>Delete Post</Text>
            )}
          </Flex>
          <Flex justify="space-between">
            <Flex gap={5}>
              <Flex>
                <CommentIcon
                  style={{
                    marginRight: "5px",
                  }}
                />
                <button onClick={handleCommentClick}>Comment</button>
              </Flex>
              <Flex align="center">
                <ThumbUpAltIcon
                  style={{
                    marginRight: "5px",
                  }}
                />
                <p>Like</p>
                <div>
                  <button onClick={handleLikeClick}>
                    {isLiked ? "Unlike" : "Like"}
                  </button>
                </div>
              </Flex>
            </Flex>

            <Flex align="center" gap={4}>
              <p>{post.post.likes.length} likes</p>
              {/* <p>12 comments</p> */}
            </Flex>
          </Flex>
          {showCommentInput && (
            <>
              <Box as="form" p={3} onSubmit={handleCommentSubmit}>
                <Textarea
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button mt={3} type="submit">
                  Submit
                </Button>
              </Box>
              <Box p="2" my="2">
                {post.post.comments.map((comment) => (
                  <Box key={comment.postId} p="2" my="2">
                    <Stack p={2} bg={bgColor} borderRadius={20}>
                      <Flex justify="space-between">
                        <Flex align="center" px={2}>
                          <Avatar
                            size="sm"
                            // name={
                            //   comment.user.firstName + " " + comment.user.lastName
                            // }
                            src=""
                          />
                          <Text px={2} fontSize="sm" color="gray.500">
                            {/* {comment.user.firstName + " " + comment.user.lastName} */}
                            name
                          </Text>
                        </Flex>
                        {comment.userId === user._id && (
                          <Menu>
                            <MenuButton as={Button} variant="ghost" size="sm">
                              <MoreVertIcon />
                            </MenuButton>
                            <MenuList>
                              <MenuItem>Delete</MenuItem>
                            </MenuList>
                          </Menu>
                        )}
                      </Flex>
                      <Box p={3}>
                        <p>{comment.comment}</p>
                      </Box>
                    </Stack>
                  </Box>
                ))}
              </Box>
            </>
          )}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ForumPost;
