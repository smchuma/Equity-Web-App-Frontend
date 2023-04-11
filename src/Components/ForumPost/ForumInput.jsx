import {
  Box,
  Button,
  Flex,
  Input,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import useApi from "../../hooks/useApi";

const ForumInput = () => {
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(255, 255, 255, 0.2)"
  );

  const [desc, setDesc] = useState("");
  const { postData } = useApi();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await postData.mutateAsync({ desc });
      console.log(result);
      setDesc("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      w="100%"
      as="form"
      onSubmit={handleSubmit}
      borderRadius={20}
      boxShadow={`0px 0px 4px ${boxShadowColor}`}
    >
      <Flex align="center" p={3}>
        <Input
          h="70px"
          resize="none"
          placeholder="What's on your mind?"
          focusBorderColor="none !important"
          boxShadow="none !important"
          outline="none !important"
          border="none !important"
          _placeholder={{ color: "gray.500" }}
          _focus={{ border: "none", outline: "none" }}
          p={5}
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        <Button
          colorScheme="blue"
          borderRadius={20}
          w="150px"
          mr={3}
          type="submit"
        >
          Post
        </Button>
      </Flex>
    </Box>
  );
};

export default ForumInput;
