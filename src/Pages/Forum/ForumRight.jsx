import { Box, Stack, Text, useColorModeValue } from "@chakra-ui/react";
// import { FaUser } from "react-icons/fa";
import React from "react";

const ForumRight = () => {
  const questions = [
    { user: "Scholarship", question: "When are scholarships available?" },
    {
      user: "Internships",
      question: "Do you offer any internships opportunities",
    },
    { user: "Scholarship", question: "How do i apply for a scholarship" },
    {
      user: "Banking",
      question: "Why should one get a credit card?",
    },
    {
      user: "Finance",
      question:
        "What is the difference between a debit card and a credit card?",
    },
    {
      user: "Goal Account",
      question: "What are the benefits of a goal account?",
    },
  ];

  const users = [...new Set(questions.map((q) => q.user))]; // get unique user names
  const cardBgColor = useColorModeValue("gray.100", "gray.700");
  const cardBorderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Stack marginTop="120px" spacing={4} py={4} px={4} borderRadius="md">
      <Text fontWeight="bold">Most Talked about Topics</Text>
      {users.map((user) => (
        <Box
          key={user}
          borderWidth="1px"
          borderRadius="md"
          borderColor={cardBorderColor}
          bgColor={cardBgColor}
        >
          <Box p={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mb={2}
            >
              <Box display="flex" alignItems="center">
                <Box
                  // as={FaUser}
                  color="gray.400"
                  boxSize="24px"
                  mr={2}
                  aria-hidden
                />
                <Text fontWeight="bold">{user}</Text>
              </Box>
              <Text fontSize="sm">
                {questions.filter((q) => q.user === user).length} questions
              </Text>
            </Box>
            <Box mt={2}>
              {questions
                .filter((q) => q.user === user)
                .slice(0, 2) // show only the first two questions for each user
                .map((q, index) => (
                  <Box key={index} mt={2}>
                    <Text>{q.question}</Text>
                  </Box>
                ))}
            </Box>
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default ForumRight;
