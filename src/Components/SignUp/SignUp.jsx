import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import TextField from "../Formik/TextField";
import { BASEURL } from "../../API_URL/api";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./SignUp.scss";

const SignUp = () => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    setLoading(true);
    const { firstName, lastName, email, password } = values;

    try {
      await axios.post(
        `${BASEURL}/register`,
        JSON.stringify({ firstName, lastName, email, password }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      navigate("/login");
      actions.resetForm();
      setLoading(false);
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg(
          "No Server Response. Please check your internet connection and try again"
        );
      } else if (err.response?.status === 400) {
        setErrMsg(
          "Email already exists. Please use a different email or login"
        );
      } else if (err.response?.status === 409) {
        setErrMsg("Email already exists. Please use a different email");
      } else {
        setErrMsg(
          "Register Failed. Please check your credentials and try again"
        );
      }
      setLoading(false);
      console.log(loading);
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
              alt=""
            />
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
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={Yup.object({
                firstName: Yup.string().required("First name required"),
                lastName: Yup.string().required("Last name required"),
                email: Yup.string()
                  .email("Please enter a valid email address")
                  .required("email required"),
                password: Yup.string()
                  .required("Password is required")
                  .matches(
                    passwordRegex,
                    "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number"
                  ),
                confirmPassword: Yup.string()
                  .oneOf([Yup.ref("password"), null], "Passwords must match")
                  .required("Confirm password is required"),
              })}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <VStack as="form" onSubmit={formik.handleSubmit} spacing={4}>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <TextField
                      name="firstName"
                      placeholder="enter firstName"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="lastName" isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <TextField
                      name="lastName"
                      placeholder="enter lastName"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <TextField
                      name="email"
                      placeholder="enter email"
                      type="email"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <TextField
                      name="password"
                      type="password"
                      placeholder="enter password"
                    />
                  </FormControl>
                  <FormControl id="password" isRequired>
                    <FormLabel>confirm password</FormLabel>
                    <TextField
                      name="confirmPassword"
                      type="password"
                      placeholder="enter confirm password"
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
                    Register
                  </Button>
                  <Flex>
                    <Text>Already have an account? </Text>
                    <Link to="/login">
                      <Box ml={2} color="blue.500">
                        Login
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

export default SignUp;
