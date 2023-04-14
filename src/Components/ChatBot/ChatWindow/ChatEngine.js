import React from "react";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const ChatEngine = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const chatBodyRef = useRef(null);

  const handleSend = () => {
    if (inputValue) {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      // Here you would send the message to the server and receive a response from the server.
      // For demo purposes, we'll simulate a response from the server after a delay.
      setTimeout(() => {
        setMessages([...messages, { text: "Hello there!", sender: "bot" }]);
      }, 1000);
      setInputValue("");
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
            borderRadius="50%"
            boxShadow="0px 0px 16px 6px rgba(0, 0, 0, 0.33)"
          />

          <Text fontSize="lg" fontWeight="bold" color="white">
            Ask Me Anything <br /> about Equity
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
        >
          {messages.map((message, index) => (
            <Flex
              key={index}
              justifyContent={
                message.sender === "user" ? "flex-end" : "flex-start"
              }
            >
              <Box
                maxW="80%"
                bg={message.sender === "user" ? "blue.500" : "gray.200"}
                color={message.sender === "user" ? "white" : "black"}
                px={3}
                py={2}
                mb="10px"
                borderRadius={8}
                flexGrow={
                  message.sender === "user"
                    ? 0
                    : message.text.length > 50
                    ? 1
                    : 0
                }
              >
                {message.text}
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box py={2} px={4}>
        {/* Chat input */}
        <Flex mt="auto">
          <Input
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
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
