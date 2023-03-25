import {
  FormControl,
  FormLabel,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Flex,
  Box,
} from "@chakra-ui/react";
import GoogleIcon from "@mui/icons-material/Google";
import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show] = useState();
  const [loading] = useState(false);

  const handleSubmit = () => {
    window.location.href = "/home";
  };
  return (
    <div className="container">
      <div className="container-content">
        <div className="left">
          <div className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h1>The EGF Scholar Platform</h1>
            <div className="circle">
              <img src="assets/images/login.gif" alt="login" />
            </div>
            <h2>Welcome back</h2>
          </div>
          <div className="form">
            <Stack gap="15px">
              <FormControl id="email" isRequired variant="floating">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="input"
                  placeholder=" "
                />
                <FormLabel>Email</FormLabel>
              </FormControl>
              <FormControl id="password" isRequired variant="floating">
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="input"
                    placeholder=" "
                  />
                  <FormLabel className="color">Password</FormLabel>
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => {}}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                className="btn"
                width="100%"
                style={{
                  marginTop: "20px",
                  backgroundColor: "#BE5529",
                  color: "white",
                  fontWeight: "400",
                }}
                onClick={handleSubmit}
                isLoading={loading}
              >
                Login
              </Button>
              <Box
                style={{
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                <Flex justifyContent="space-between">
                  <Link to="/signup">
                    <Text cursor="pointer">Create an account?</Text>
                  </Link>
                  <Text cursor="pointer">forgot Password</Text>
                </Flex>
                <Text className="hr-lines">or</Text>
              </Box>
              <Button
                style={{
                  gap: "5px",
                  fontWeight: "500",
                  boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
                  marginBottom: "50px",
                }}
              >
                <GoogleIcon
                  style={{
                    fontSize: "20px",
                    color: "#4285F4",
                  }}
                />
                Log in with Google
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
