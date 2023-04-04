import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";

export default function NavItem({ icon, title, active }) {
  return (
    <Flex
      mt={10}
      flexDir="column"
      w="100%"
      alignItems={{
        base: "center",
        md: "flex-start",
      }}
    >
      <Menu placement="right">
        <Link
          backgroundColor={active && "brand.primary"}
          p={3}
          _hover={{
            textDecor: "none",
            backgroundColor: "brand.primary",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <MenuButton w={{ base: "full", md: "auto" }}>
            <Flex align="center">
              <IconButton
                display={{ base: "none", md: "flex" }}
                icon={icon}
                fontSize="30px"
                color="brand.secondary"
                bg="transparent"
              />

              <Text ml={5} display={{ base: "none", md: "none", lg: "flex" }}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}
