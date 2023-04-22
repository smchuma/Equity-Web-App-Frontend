import {
  Grid,
  GridItem,
  Box,
  Flex,
  Avatar,
  Text,
  IconButton,
  Menu,
  MenuList,
  MenuButton,
  Button,
  MenuItem,
  Stack,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";

import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import useApi from "../../hooks/useApi";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import HorizontalLoader from "../HorizontalLoader/HorizontalLoader";

const ForumPost = (post) => {
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { deletePost, likePost, addComment } = useApi();
  const userId = post.post.userId;
  const { user } = useUser();
  const isLiked = post.post.likes && post.post.likes.includes(user._id);

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

    if (!post) {
      return <HorizontalLoader />;
    }

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
    <Box
      w="100%"
      textAlign="justify"
      maxWidth="600px"
      borderRadius={20}
      boxShadow={`0px 0px 4px ${boxShadowColor}`}
      p={4}
    >
      <Flex alignItems="center" mb={4} justify="space-between">
        <Flex alignItems="center" gap={1}>
          <Avatar
            size="sm"
            name={post.post.user.firstName + " " + post.post.user.lastName}
            mr={2}
            src={post?.post?.user?.profilePicture}
          />
          <Text fontWeight="bold">
            {post.post.user.firstName + " " + post.post.user.lastName}
          </Text>
          <Text ml={2} fontSize="sm" color="gray.500">
            {timePost}
          </Text>
        </Flex>
        <Box>
          {userId === user._id && (
            <Text cursor="pointer" onClick={() => handleDelete()}>
              <DeleteForeverIcon />
            </Text>
          )}
        </Box>
      </Flex>
      <Text mb={4}>{post.post.desc}</Text>

      <Grid templateColumns="repeat(4, 1fr)" gap={4} w="100%">
        <GridItem w="100%" colSpan={4}>
          <Flex alignItems="center" justify="space-between">
            <Flex alignItems="center" gap={2}>
              <IconButton
                aria-label="like"
                icon={<ThumbUpAltIcon />}
                colorScheme={
                  isLiked ? (user._id === userId ? "green" : "blue") : "gray"
                }
                onClick={handleLikeClick}
              />
              <Text>
                {post.post.likes?.length}{" "}
                {post.post.likes?.length === 1 ? "Like" : "Likes"}
              </Text>
            </Flex>
            <Flex alignItems="center" gap={2}>
              <IconButton
                aria-label="comment"
                icon={<CommentIcon />}
                colorScheme="gray"
                onClick={handleCommentClick}
              />
              <Text mr={2}>
                {post.post.comments?.length}{" "}
                {post.post.comments?.length === 1 ? "Comment" : "Comments"}
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        {showCommentInput && (
          <GridItem colSpan={4}>
            <form onSubmit={handleCommentSubmit}>
              <Flex alignItems="center" flexDir="column" gap={2}>
                <Flex align="center" w="100%" mt={4}>
                  <Avatar
                    size="sm"
                    name={user.firstName + " " + user.lastName}
                    mr={2}
                    src={user.profilePicture}
                  />
                  <Input
                    type="text"
                    bg={bgColor}
                    p={5}
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    style={{
                      border: "none",
                      outline: "none",
                      backgroundColor: bgColor,
                      borderRadius: 20,
                      width: "100%",
                    }}
                  />
                </Flex>
                <Box w="100%" mt={5}>
                  {post.post.comments.map((comment) => (
                    <Box key={comment.postId} p="2" my="2">
                      <Stack p={2} bg={bgColor} borderRadius={20}>
                        <Flex justify="space-between">
                          <Flex align="center" px={2}>
                            <Avatar
                              size="sm"
                              name={
                                comment?.user?.firstName +
                                " " +
                                comment?.user?.lastName
                              }
                              src={comment?.user?.profilePicture}
                            />
                            <Text px={2} fontSize="sm" color="gray.500">
                              {comment.user.firstName +
                                " " +
                                comment.user.lastName}
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
              </Flex>
            </form>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default ForumPost;
