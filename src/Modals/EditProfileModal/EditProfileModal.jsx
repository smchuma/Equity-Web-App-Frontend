import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import useUser from "../../hooks/useUser";
import { useState } from "react";

const EditProfileModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user, updateUser } = useUser();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    desc: user?.desc || "",
    city: user?.city || "",
    currentPosition: user?.currentPosition || "",
    education: user?.education || "",
    phone: user?.phone || "",
    address: user?.address || "",
    birthday: user?.birthday || "",
    followers: {
      facebook: user?.followers?.facebook || "",
      twitter: user?.followers?.twitter || "",
      instagram: user?.followers?.instagram || "",
      linkedIn: user?.followers?.linkedIn || "",
    },
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (["facebook", "twitter", "instagram", "linkedIn"].includes(name)) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        followers: {
          ...prevFormData.followers,
          [name]: value,
        },
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      onClose();
      updateUser.mutateAsync(formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box cursor="pointer" w="100%" position="relative">
      <Flex align="center">
        <Button
          width={{
            base: "200px",
            md: "auto",
          }}
          onClick={onOpen}
          colorScheme="red"
          variant="outline"
          mt={3}
        >
          Edit Profile
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <>
              <Stack as="form" spacing={4}>
                <Box>
                  <Box fontWeight="semibold" mb="1">
                    Basic Info
                  </Box>
                  <FormControl id="firstName">
                    <FormLabel>First Name</FormLabel>
                    <Input
                      value={formData.firstName}
                      onChange={handleChange}
                      name="firstName"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      value={formData.lastName}
                      onChange={handleChange}
                      name="lastName"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="desc">
                    <FormLabel>About Me</FormLabel>
                    <Input
                      value={formData.desc}
                      onChange={handleChange}
                      name="desc"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="city">
                    <FormLabel>Location</FormLabel>
                    <Input
                      value={formData.city}
                      onChange={handleChange}
                      name="city"
                      type="text"
                    />
                  </FormControl>
                  <FormControl id="currentPosition">
                    <FormLabel>Current Position</FormLabel>
                    <Select
                      value={formData.currentPosition}
                      onChange={handleChange}
                      name="currentPosition"
                    >
                      <option value="student">Student</option>
                      <option value="employed">Employed</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box>
                  <Box fontWeight="semibold" mb="1">
                    Education
                  </Box>
                  <FormControl id="education">
                    <FormLabel>Add Education</FormLabel>
                    <Input
                      value={formData.education}
                      onChange={handleChange}
                      name="education"
                      type="text"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Box fontWeight="semibold" mb="1">
                    Contact Info
                  </Box>
                  <FormControl id="phone">
                    <FormLabel>Phone Number</FormLabel>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </FormControl>
                  <FormControl id="address">
                    <FormLabel>Address</FormLabel>
                    <Input
                      type="text"
                      value={formData.address}
                      onChange={handleChange}
                      name="address"
                    />
                  </FormControl>
                  <FormControl id="birthday">
                    <FormLabel>Birthday</FormLabel>
                    <Input
                      type="date"
                      value={formData.birthday}
                      onChange={handleChange}
                      name="birthday"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <Box fontWeight="semibold" mb="1">
                    Social Links
                  </Box>
                  <FormControl id="facebook">
                    <FormLabel>Facebook</FormLabel>
                    <Input
                      type="url"
                      value={formData.followers?.[0]?.facebook}
                      onChange={handleChange}
                      name="facebook"
                    />
                  </FormControl>
                  <FormControl id="twitter">
                    <FormLabel>Twitter</FormLabel>
                    <Input
                      type="url"
                      value={formData.followers?.[0]?.twitter}
                      onChange={handleChange}
                      name="twitter"
                    />
                  </FormControl>
                  <FormControl id="instagram">
                    <FormLabel>Instagram</FormLabel>
                    <Input
                      type="url"
                      value={formData.followers?.[0]?.instagram}
                      onChange={handleChange}
                      name="instagram"
                    />
                  </FormControl>
                  <FormControl id="linkedIn">
                    <FormLabel>LinkedIn</FormLabel>
                    <Input
                      type="url"
                      value={formData.followers?.[0]?.linkedIn}
                      onChange={handleChange}
                      name="linkedIn"
                    />
                  </FormControl>
                </Box>
              </Stack>
            </>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={handleSubmit} variant="ghost">
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EditProfileModal;
