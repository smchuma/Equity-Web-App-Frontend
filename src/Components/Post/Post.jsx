import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Post = ({ feed }) => {
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
  const timePost = getTimeDifference(feed.createdAt);

  const firstName = `${feed.user.firstName
    .charAt(0)
    .toUpperCase()}${feed.user.firstName.slice(1)}`;
  const lastName = `${feed.user.lastName
    .charAt(0)
    .toUpperCase()}${feed.user.lastName.slice(1)}`;

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
          p={3}
        >
          <Box mr={4}>
            <Avatar
              name={feed.user.firstName + " " + feed.user.lastName}
              src=""
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
          <IconButton
            icon={<MoreVertIcon />}
            aria-label="More"
            variant="ghost"
            size="sm"
            ml="auto"
          />
        </Flex>
        <Box>
          <Text px={4} fontSize="sm" textAlign="justify">
            {feed.desc}
          </Text>
          <Box mt={4}>
            <Image
              src={feed.img}
              borderRadius="md"
              alt="post image"
              boxSize="100%"
              objectFit="cover"
            />
          </Box>
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
            <Text fontSize="sm" color="blackAlpha.800">
              {/* {like} people like it */}
            </Text>
          </Box>
          <Box mr={5}>
            <Text fontSize="sm" color="blackAlpha.800">
              {/* {comment} comments */}
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
          <Box>
            <Flex align="center" ml={2}>
              <IconButton
                aria-label="Like"
                icon={<ThumbUpIcon />}
                color="blue.600"
                size="lg"
              />
              <Text fontSize="lg" color="gray.500">
                Like
              </Text>
            </Flex>
          </Box>
          <Box>
            <Flex align="center">
              <IconButton
                aria-label="Comment"
                icon={<CommentIcon />}
                color="black.600"
                size="lg"
              />
              <Text fontSize="lg" color="gray.500">
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
                size="lg"
              />
              <Text fontSize="lg" color="gray.500">
                Save
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Stack>
    </div>
  );
};

export default Post;
