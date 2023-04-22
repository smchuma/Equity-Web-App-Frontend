import { Flex, Text, Menu, IconButton, Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavItem({ icon, title, link, active }) {
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
        <Box
          backgroundColor={active && "brand.primary"}
          width="100%"
          p={3}
          _hover={{
            textDecor: "none",
            backgroundColor: "brand.tomato",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <Link to={link}>
            <Flex align="center">
              <IconButton
                display={{ base: "none", md: "flex" }}
                icon={icon}
                fontSize="30px"
                color="brand.secondary"
                bg="transparent"
                _hover={{
                  textDecor: "none",
                  backgroundColor: "transparent",
                  color: "white",
                }}
              />
              <Text ml={5} display={{ base: "none", md: "none", lg: "flex" }}>
                {title}
              </Text>
            </Flex>
          </Link>
        </Box>
      </Menu>
    </Flex>
  );
}

NavItem.propTypes = {
  icon: PropTypes.node,
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool,
};
