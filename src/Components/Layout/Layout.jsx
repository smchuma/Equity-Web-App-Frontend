import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarComp } from "../../Components";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Box style={{ display: "flex" }} marginTop="65px">
      <Box
        boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
        w={{
          base: "0",
          md: "100px",
          lg: "200px",
        }}
        h="100vh"
        pos="fixed"
        sx={{
          transition: "all 0.3s ease-in-out",
        }}
      >
        <SidebarComp />
      </Box>
      <Box
        marginLeft={{
          base: "0",
          md: "100px",
          lg: "200px",
        }}
        sx={{ position: "relative", transition: "all 0.3s ease-in-out" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;