import {
  FormControl,
  FormLabel,
  Button,
  Text,
  Flex,
  Box,
  VStack,
} from "@chakra-ui/react";
import GoogleIcon from "@mui/icons-material/Google";

import { TextField } from "../../Components";
import useAuth from "../../hooks/useAuth";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "../../api/axios";
import { Formik } from "formik";

import * as Yup from "yup";
import "./Login.scss";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  const [loading, setLoading] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const { email, password } = values;

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      setAuth({ accessToken, user: true });
      actions.resetForm();
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg(
          "No Server Response. Please check your internet connection and try again"
        );
      } else if (err.response?.status === 400) {
        setErrMsg(
          "Invalid email or Password. Please check your credentials and try again"
        );
      } else if (err.response?.status === 401) {
        setErrMsg(
          "Invalid email or Password. Please check your credentials and try again"
        );
      } else {
        setErrMsg("Login Failed. Please check your credentials and try again");
      }
      setLoading(false);
    }
  };
  return (
    <div className="container">
      <div className="container-content">
        <div className="left">
          <div className="logo">
            <img
              src={
                "https://res.cloudinary.com/smchuma/image/upload/v1679673932/logo_awmyvm.png"
              }
              alt="logo"
            />
          </div>
        </div>
        <div className="right">
          <div className="title">
            <h1>EGF Scholar Platform</h1>
            <div className="circle">
              <img
                src={
                  "https://res.cloudinary.com/smchuma/image/upload/v1679843396/login_ezauuc.gif"
                }
                alt="login"
              />
            </div>
            <h2>Welcome back</h2>
          </div>
          <div className="form">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("invalid email")
                  .required("email required"),
                password: Yup.string()
                  .required("Password required")
                  .min(6, "Password is too short"),
              })}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <VStack as="form" onSubmit={formik.handleSubmit} spacing={4}>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <TextField
                      name="email"
                      placeholder="enter email"
                      type="email"
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Password</FormLabel>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="enter password"
                    />
                  </FormControl>
                  <Text color="red.500">{errMsg}</Text>
                  <Button
                    type="submit"
                    bg="#BE5529"
                    color="white"
                    variant="solid"
                    isLoading={loading}
                    loadingText="Loading"
                    w="100%"
                    sx={{
                      _hover: {
                        bg: "color.primary",
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Flex>
                    <Text>Don't have an account?</Text>
                    <Link to="/signup">
                      <Box ml={2} color="blue.500">
                        Sign Up
                      </Box>
                    </Link>
                  </Flex>
                  <Button
                    w="100%"
                    fontWeight="500"
                    boxShadow="5px 5px 10px rgba(0, 0, 0, 0.2)"
                    colorScheme="blue"
                    variant="outline"
                    leftIcon={<GoogleIcon />}
                  >
                    Login with Google
                  </Button>
                </VStack>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
