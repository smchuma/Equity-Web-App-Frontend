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
  useColorModeValue,
} from "@chakra-ui/react";

import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import useApi from "../../hooks/useApi";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const ForumPost = (post) => {
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);
  const { deletePost, likePost, addComment } = useApi();
  const userId = post.post.userId;
  const { user } = useUser();
  const isLiked = feed.likes.includes(user._id);


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
            <Text cursor="pointer" onClick={handleDelete}>
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
                colorScheme="blue"
                onClick={handleLikeClick}
              />
              <Text>
                {post.post.likes.length}{" "}
                {post.post.likes.length === 1 ? "Like" : "Likes"}
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
                {post.post.comments.length}{" "}
                {post.post.comments.length === 1 ? "Comment" : "Comments"}
              </Text>
            </Flex>
          </Flex>
        </GridItem>
        {showCommentInput && (
          <GridItem colSpan={4}>
            <form onSubmit={handleCommentSubmit}>
              <Flex alignItems="center" gap={2}>
                <Avatar
                  size="sm"
                  name={user.firstName + " " + user.lastName}
                  mr={2}
                />
                <input
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{
                    border: "none",
                    outline: "none",
                    backgroundColor: bgColor,
                    borderRadius: 20,
                    padding: 10,
                    width: "100%",
                  }}
                />
              </Flex>
            </form>
          </GridItem>
        )}
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
                  
                    <Box p={3}>
                      <p>{comment.comment}</p>
                    </Box>
      </Grid>
    </Box>
  );
};

export default ForumPost;
