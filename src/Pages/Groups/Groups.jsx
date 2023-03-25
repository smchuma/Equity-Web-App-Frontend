import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import GroupsCard from "../../Components/GroupsCard/GroupsCard";

const Groups = () => {
  return (
    <>
      <Stack
        direction="row"
        h="calc(100vh-25%)"
        w="100%"
        sx={{
          paddingTop: "65px",
        }}
      >
        <Box w="calc(100% - 30%)">
          <Box mt={5}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="gray.500"
              textAlign="center"
            >
              Chapters
            </Text>
          </Box>
          <Grid
            templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
            gap={6}
            p={10}
          >
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
            <GroupsCard />
          </Grid>
        </Box>
        <Box w="25%" pos="sticky" right={0}>
          <Stack
            sx={{
              paddingTop: "50px",
            }}
            px={2}
          >
            <Heading
              fontSize="2xl"
              fontWeight="bold"
              color="gray.500"
              textAlign="center"
              mb={2}
            >
              Suggested Events
            </Heading>

            <h1>sss</h1>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Groups;
