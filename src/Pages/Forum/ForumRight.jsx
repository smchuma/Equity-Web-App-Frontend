import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const ForumRight = () => {
  const questions = [
    { user: "Scolarship", question: "How do I create a new post?" },
    { user: "Internships", question: "Why is my post not showing up?" },
    { user: "Scolarship", question: "How do I create a new post?" },
  ];

  const users = [...new Set(questions.map((q) => q.user))]; // get unique user names
  const boxShadowColor = useColorModeValue(
    "rgba(0, 0, 0, 0.2)",
    "rgba(255, 255, 255, 0.2)"
  );
  return (
    <Stack mt={5} spacing={4} py={4} px={4} borderRadius="md">
      <Text>Most Talked about Topics</Text>
      {users.map((user) => (
        <Box key={user} boxShadow={`0px 0px 4px ${boxShadowColor}`} p={4}>
          <Text fontWeight="bold">{user}</Text>
          {questions
            .filter((q) => q.user === user)
            .slice(0, 2) // show only the first two questions for each user
            .map((q, index) => (
              <Box key={index} mt={2}>
                <Text>{q.question}</Text>
              </Box>
            ))}
        </Box>
      ))}
    </Stack>
  );
};

export default ForumRight;
