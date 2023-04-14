import React from "react";
import { Flex, Box, Skeleton } from "@chakra-ui/react";

const SkeletonLoadingComponent = () => {
  return (
    <Flex w="100vw" h="100vh" mt="60px">
      {/* Sidebar */}
      <Box w="300px" p="4">
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
      </Box>

      <Box flex="1" ml="4">
        {/* Navbar */}
        <Box h="60px" mb="4">
          <Skeleton h="40px" w="40px" borderRadius="full" ml="4" mt="10px" />
        </Box>

        {/* Main Content */}
        <Box h="100%" w="80%" borderRadius="md" boxShadow="md" p={22}>
          <Skeleton height="40px" mb="4" />
          <Skeleton height="70vh" mb="4" />
        </Box>
      </Box>

      {/* Right Bar */}
      <Box w="300px" p="4" ml="4">
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
        <Skeleton height="40px" mb="4" />
      </Box>
    </Flex>
  );
};

export default SkeletonLoadingComponent;
