import React, { useRef, useEffect, useState } from "react";

import { Box } from "@chakra-ui/react";

import Avatar from "./Avatar";
import ChatWindow from "./ChatWindow/ChatWindow";

const SupportEngine = () => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  const [visible, setVisible] = useState(false);

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setVisible(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const handlePageWheel = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <Box ref={wrapperRef}>
      <ChatWindow visible={visible} onWheel={handlePageWheel} />

      <Avatar
        onClick={() => setVisible(true)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
        }}
      />
    </Box>
  );
};

export default SupportEngine;
