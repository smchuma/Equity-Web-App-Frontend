import React from "react";
import { Route, Routes } from "react-router-dom";
import { Events, Groups, Home, Forum, ProfilePage } from "./Pages";
import { UserEvents, About, Badges, Chapters, Inquiries } from "./Sections";
import "./App.scss";
import { Navbar, Sidebar } from "./Components";
import { Box, Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Navbar />
      <Flex>
        <Sidebar id="123" />
        <Box flex="1" ml="250px">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />}>
              <Route path="about" element={<About />} />
              <Route path="inquiries" element={<Inquiries />} />
              <Route path="chapters" element={<Chapters />} />
              <Route path="badges" element={<Badges />} />
              <Route path="events" element={<UserEvents />} />
            </Route>
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
