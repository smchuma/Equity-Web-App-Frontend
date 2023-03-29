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

import { Users } from "../../dummyData";

const Post = ({ post }) => {
  const { photo, date, desc, comment, like } = post;

  return (
    <div className="post">
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
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="user profile"
            />
          </Box>
          <Box>
            <Text fontWeight="bold">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </Text>
            <Text fontSize="sm" color="gray.500">
              {date}
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
            {desc}
          </Text>
          <Box mt={4}>
            <Image
              src={photo}
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
              {like} people like it
            </Text>
          </Box>
          <Box mr={5}>
            <Text fontSize="sm" color="blackAlpha.800">
              {comment} comments
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
