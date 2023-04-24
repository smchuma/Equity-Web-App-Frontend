import {
  Avatar,
  Box,
  Button,
  Flex,
  Input,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import PostModal from "../../Modals/PostModal/PostModal";

const FeedInput = () => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const boxShadow = useColorModeValue(
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 2px 4px rgba(255, 255, 255, 0.1)"
  );
  const { user } = useUser();
  return (
    <>
      <VStack
        spacing="10px"
        p={5}
        borderRadius={30}
        mb="20px"
        boxShadow={boxShadow}
      >
        <Box w="600px">
          <PostModal width="100%">
            <Flex alignItems="center" w="100%" px="10px">
              <Avatar
                size="md"
                name={user.firstName + " " + user.lastName}
                src={user?.profilePicture}
              />

              <Input
                minW="0"
                variant="unstyled"
                placeholder="Click me to start a post"
                borderWidth={1}
                borderColor={borderColor}
                p={3}
                borderRadius={20}
                size="sm"
                ml="5"
                color="white"
                sx={{
                  "&::placeholder": {
                    paddingLeft: "10px",
                    color: "white",
                  },
                }}
              />
            </Flex>
            <Flex
              mt={4}
              alignItems="center"
              justifyContent="space-between"
              w="100%"
              px="10px"
            >
              <Flex w="100%" alignItems="center">
                <Button variant="unstyled" bg="brand.tomato" w="100%">
                  <Text color="white" fontWeight="bold">
                    Post
                  </Text>
                </Button>
              </Flex>
            </Flex>
          </PostModal>
        </Box>
      </VStack>
    </>
  );
};

export default FeedInput;
