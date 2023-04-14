import React from "react";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import { ENSERSURL } from "../../../API_URL/api";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ChatEngine = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const chatBodyRef = useRef(null);
  const handleSend = async () => {
    const newMessage = { question, answer: null };
    setMessages([...messages, newMessage]);
    try {
      const response = await fetch(ENSERSURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: question }),
      });
      const data = await response.json();
      newMessage.answer = data.answer;
      setMessages([...messages, newMessage]);
      setQuestion("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleWheel = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <Flex direction="column" h="100%">
      <Box py={2} px={4} bg="brand.tomato">
        {/* Chat header */}
        <Flex
          justifyContent="center"
          alignItems="center"
          mb={2}
          gap={2}
          align="center"
          p={2}
        >
          <img
            src={
              "https://res.cloudinary.com/smchuma/image/upload/v1679674079/logoWhite_xjpk3i.png"
            }
            alt="chat"
            width="75px"
            height="75px"
          />

          <Text fontSize="lg" fontWeight="bold" color="white">
            Ask Me Anything <br /> about Equity Leaders Program.
          </Text>
        </Flex>
      </Box>
      <Box
        flex="1"
        overflowY="auto"
        p={4}
        ref={chatBodyRef}
        css={{
          "&::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            background: "transparent",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}
      >
        {/* Chat messages */}
        <Box
          flex="1"
          overflowY="scroll"
          onWheel={handleWheel}
          css={{
            "&::-webkit-scrollbar": {
              width: "0.4em",
              height: "0.4em",
            },
            "&::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
          }}
          style={{ paddingBottom: "60px" }}
        >
          {messages.map((m, index) => (
            <Flex
              key={index}
              color="white"
              p={2}
              borderRadius="md"
              mb={2}
              flexDirection={m.question ? "column" : "column-reverse"}
              alignItems={m.question ? "flex-end" : "flex-start"}
              justifyContent={m.question ? "flex-end" : "flex-start"}
            >
              <Text
                fontSize="sm"
                fontWeight="bold"
                color="white"
                mb={m.question ? 2 : 0}
                bg="gray"
                p="5px 10px"
                borderRadius="10px"
                // mr={260}
              >
                {m.question}
              </Text>
              <Text bg="brand.primary" p="5px 10px" borderRadius="10px">
                {m.answer}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>

      <Box py={2} px={4}>
        {/* Chat input */}
        <Flex mt="auto">
          <Input
            placeholder="Type your message..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            mr={2}
            flex="1"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />
          <Button bg="brand.primary" color="white" onClick={handleSend}>
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatEngine;
