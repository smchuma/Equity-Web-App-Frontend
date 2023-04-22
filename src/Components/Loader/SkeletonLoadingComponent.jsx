import { Flex, Box, Skeleton } from "@chakra-ui/react";

const SkeletonLoadingComponent = () => {
  return (
    <Flex w="100vw" h="100vh" mt="60px">
      {/* Sidebar */}
      <Box mt="65px" w="300px" p="10">
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
      </Box>

      <Box flex="1" mt="100px" ml={7}>
        {/* Main Content */}
        <Box h="100%" w="80%" borderRadius="md" boxShadow="md" p={22}>
          <Skeleton height="40px" mb="4" />
          <Skeleton height="70vh" mb="4" />
        </Box>
      </Box>

      {/* Right Bar */}
      <Box w="300px" p="4" mt="65px" ml="4">
        <Skeleton height="20px" mb="4" />
        <Skeleton height="70vh" mb="4" />
      </Box>
    </Flex>
  );
};

export default SkeletonLoadingComponent;
