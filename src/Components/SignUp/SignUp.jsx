import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";
import "../Login/Login.scss";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show] = useState();
  const [loading] = useState(false);

  const handleSubmit = () => {};
  return (
    <div className="container">
      <div className="container-content">
        <div className="left">
          <div className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </div>
        </div>
        <div className="right">
          <div
            className="title"
            style={{
              marginTop: "80px",
            }}
          >
            <h1>The EGF Scholar Platform</h1>

            <h2>Create an account</h2>
          </div>
          <div className="form">
            <Stack gap="15px">
              <FormControl id="first-name" variant="floating" isRequired>
                <Input
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="input"
                  placeholder=" "
                />
                <FormLabel>First name</FormLabel>
              </FormControl>
              <FormControl id="last-name" variant="floating" isRequired>
                <Input
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="input"
                  placeholder=" "
                />
                <FormLabel>Last name</FormLabel>
              </FormControl>
              <FormControl id="email" variant="floating" isRequired>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className="input"
                  placeholder=" "
                />
                <FormLabel>Email</FormLabel>
              </FormControl>
              <FormControl id="password" variant="floating" isRequired>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="input"
                    placeholder=" "
                  />
                  <FormLabel>Password</FormLabel>

                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={() => {}}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="confirm-password" variant="floating" isRequired>
                <InputGroup>
                  <Input
                    type={show ? "text" : "password"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    className="input"
                    placeholder=" "
                  />
                  <FormLabel>Confirm Password</FormLabel>
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
                Sign Up
              </Button>
              <Box>
                <Link to="/">
                  <Text
                    cursor="pointer"
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Click to Login
                  </Text>
                </Link>
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
                sign up with Google
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
