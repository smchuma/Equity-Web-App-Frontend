import { Box, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import GroupsCard from "../../Components/GroupsCard/GroupsCard";
import "./Groups.scss";

const Groups = () => {
  return (
    <>
      <Stack
        direction="row"
        h="calc(100vh-25%)"
        w="100%"
        className="Groups"
        sx={{
          paddingTop: "65px",
        }}
      >
        <Box>
          <Box mt={5}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="gray.500"
              textAlign="center"
              mb={5}
            >
              Chapters
            </Text>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10} px={12}>
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
          </SimpleGrid>
        </Box>
      </Stack>
    </>
  );
};

export default Groups;
