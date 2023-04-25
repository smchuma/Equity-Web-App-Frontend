import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Image,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import useUser from "../../hooks/useUser";
import useFeed from "../../hooks/useFeed";
import { useState } from "react";
import { Link } from "react-router-dom";

const Post = (feed) => {
  const { user } = useUser();
  const { deleteFeed, likeFeed, commentFeed } = useFeed();
  const isLiked = feed.feed.likes.includes(user._id);
  const [comment, setComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);

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
  const timePost = getTimeDifference(feed.feed.createdAt);

  const firstName = `${feed.feed.user.firstName
    .charAt(0)
    .toUpperCase()}${feed.feed.user.firstName.slice(1)}`;
  const lastName = `${feed.feed.user.lastName
    .charAt(0)
    .toUpperCase()}${feed.feed.user.lastName.slice(1)}`;

  const handleDelete = async () => {
    try {
      await deleteFeed.mutate(feed.feed._id);
    } catch (error) {
      console.log(error);
    }
  };
  const handleLikeClick = () => {
    if (!isLiked) {
      likeFeed.mutate({ postId: feed.feed._id, userId: feed.feed.userId });
    }
  };

  const handleCommentClick = () => {
    setShowCommentInput(!showCommentInput);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    commentFeed.mutate({
      postId: feed.feed._id,
      comment,
    });
    setComment("");
  };

  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <div>
      <Stack cursor="pointer" mb={14} backgroundColor="transparent">
        <Flex
          boxShadow="md"
          borderRadius="md"
          borderWidth="1px"
          borderColor="subtleBorderColor"
          borderBottomWidth="2px"
          borderBottomColor="gray.200"
          paddingBottom={2}
          justify="space-between"
          p={3}
        >
          <Link to={`/profile/${feed.feed.userId}`}>
            <Flex align="center">
              <Box mr={4}>
                <Avatar
                  name={
                    feed.feed.user.firstName + " " + feed.feed.user.lastName
                  }
                  src={feed?.feed?.user?.profilePicture}
                  alt="user profile"
                />
              </Box>
              <Box>
                <Text fontWeight="bold">
                  {firstName} {lastName}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  {timePost}
                </Text>
              </Box>
            </Flex>
          </Link>
          {feed.feed.userId === user._id && (
            <Menu>
              <MenuButton as={Button} variant="ghost" size="sm">
                <MoreVertIcon />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={handleDelete}> Delete</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Flex>
        <Box>
          <Text px={4} fontSize="sm" textAlign="justify">
            {feed.feed.desc}
          </Text>
          {feed.feed.img && (
            <Box mt={4}>
              <Image
                src={feed.feed.img}
                borderRadius="md"
                alt=""
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
          )}
        </Box>
        <Flex mt={4} alignItems="center" justify="space-between">
          <Box
            display="flex"
            align="center"
            justify="center"
            mr={4}
            padding="10px"
            ml={2}
          >
            <img
              className="likeIcon"
              src={
                "https://res.cloudinary.com/smchuma/image/upload/v1680109973/like_ogedgq.png"
              }
              alt=""
              style={{
                width: "20px",

                marginRight: "5px",
              }}
            />
            <Text fontSize="sm" color="blue.500">
              {feed.feed.likes.length} people like it
            </Text>
          </Box>
          <Box mr={5}>
            <Text fontSize="sm" color="brand.secondary">
              {feed.feed.comments.length} comments
            </Text>
          </Box>
        </Flex>
        <Flex
          mt={4}
          alignItems="center"
          justify="space-between"
          borderTopWidth="1px"
          borderTopColor="gray.300"
        >
          <Box mt={3}>
            <Flex align="center" ml={2}>
              <IconButton
                aria-label="Like"
                icon={<ThumbUpIcon />}
                colorScheme={isLiked ? "blue" : "gray"}
                size="sm"
                onClick={handleLikeClick}
                mr={2}
              />
              <Text fontSize="sm" color="gray.500">
                <button onClick={handleLikeClick}>Like</button>
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Comment"
                icon={<CommentIcon />}
                color="black.600"
                size="sm"
                mr={2}
                onClick={handleCommentClick}
              />
              <Text onClick={handleCommentClick} fontSize="sm" color="gray.500">
                Comment
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex align="center" mr={5}>
              <IconButton
                aria-label="Save"
                icon={<BookmarkIcon />}
                color="blue.600"
                size="sm"
                mr={2}
              />
              <Text fontSize="sm" color="gray.500">
                Save
              </Text>
            </Flex>
          </Box>
        </Flex>
        {showCommentInput && (
          <>
            <Box mt={4}>
              <form onSubmit={handleCommentSubmit}>
                <Flex align="center">
                  <Input
                    type="text"
                    placeholder="Add a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    mr={2}
                  />
                  <Button
                    type="submit"
                    colorScheme="blue"
                    size="sm"
                    variant="solid"
                    mr={2}
                  >
                    Post
                  </Button>
                </Flex>
              </form>
            </Box>
            <Box p="2" my="2">
              {feed.feed.comments.map((comment) => (
                <Box key={comment.itemId} p="2" my="2">
                  <Stack p={2} bg={bgColor} borderRadius={20}>
                    <Flex justify="space-between">
                      <Flex align="center" px={2}>
                        <Avatar
                          size="sm"
                          name={
                            comment.user.firstName + " " + comment.user.lastName
                          }
                          src={comment?.user.profilePicture}
                        />
                        <Text px={2} fontSize="sm" color="gray.500">
                          {comment.user.firstName + " " + comment.user.lastName}
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
    </div>
  );
};

export default Post;
