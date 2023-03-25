import { Avatar, Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const GroupsCard = () => {
  const hoverBg = useColorModeValue("gray.200", "gray.600");

  return (
    <>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        direction="row"
        align="center"
        cursor="pointer"
        p={2}
        transition="all 0.2s ease-in-out"
        _hover={{
          boxShadow: "md",
          transform: "translateY(-4px)",
          bg: hoverBg,
        }}
      >
        <Avatar
          size="xl"
          src={
            "https://www.casita.com/images/pages/335/orig/pros-and-cons-of-studying-in-groups-78346709920221003103557AM.png"
          }
          alt={`avatar`}
        />
        <Box p="6">
          <Text fontWeight="bold" fontSize="lg" mb="2">
            <Text>Group 1</Text>
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default GroupsCard;
