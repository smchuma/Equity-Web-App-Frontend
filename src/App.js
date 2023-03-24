import React from "react";
import { Route, Routes } from "react-router-dom";
import { Profile, Events, Groups, Home, Forum } from "./Pages";
import "./App.scss";
import { Navbar, Sidebar } from "./Components";
import { Box, Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar id="123" />
        <Box flex="1" ml="200px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/events" element={<Events />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </Box>
      </Flex>
    </>
  );
};

export default App;
