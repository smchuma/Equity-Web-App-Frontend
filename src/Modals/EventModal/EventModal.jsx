import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Flex,
  Image,
  IconButton,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useUser from "../../hooks/useUser";
import "./EventModal.scss";

const EventModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useUser();
  const [formData, setFormData] = useState({
    name: "",
    date: null,
    location: "",
    speakers: [],
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "img" ? files[0] : value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleAddSpeaker = () => {
    setFormData((prevData) => ({
      ...prevData,
      speakers: [...prevData.speakers, { firstName: "", lastName: "" }],
    }));
  };

  const handleRemoveSpeaker = (index) => {
    setFormData((prevData) => ({
      ...prevData,
      speakers: prevData.speakers.filter((_, i) => i !== index),
    }));
  };

  const handleSpeakerChange = (e, index) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      speakers: prevData.speakers.map((speaker, i) =>
        i === index ? { ...speaker, [name]: value } : speaker
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit form data here
    console.log("formData", formData);
    onClose();
  };

  return (
    <Box cursor="pointer" w="100%" position="relative">
      <Flex align="center">
        {user && user?.roles && user?.roles[0].User === 1984 && (
          <Button
            width={{
              base: "200px",
              md: "auto",
            }}
            onClick={onOpen}
            colorScheme="red"
            variant="outline"
            mt={3}
            leftIcon={<AddIcon />}
          >
            Add an Event
          </Button>
        )}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Event</ModalHeader>
          <ModalBody>
            <FormControl>
              <FormLabel>Event Name</FormLabel>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <Flex justify="space-between">
                <FormLabel>Date</FormLabel>
              </Flex>
              <Flex>
                <DatePicker
                  name="date"
                  selected={formData.date}
                  onChange={handleDateChange}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  wrapperClassName="datePicker"
                  minDate={new Date()}
                />
              </Flex>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Textarea
                name="location"
                value={formData.location}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Speakers</FormLabel>
              {formData.speakers.map((speaker, index) => (
                <Flex key={index} align="center">
                  <FormControl mr={2}>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      name="firstName"
                      value={speaker.firstName}
                      onChange={(e) => handleSpeakerChange(e, index)}
                    />
                  </FormControl>
                  <FormControl mr={2}>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      name="lastName"
                      value={speaker.lastName}
                      onChange={(e) => handleSpeakerChange(e, index)}
                    />
                  </FormControl>
                  <IconButton
                    icon={<CloseIcon />}
                    onClick={() => handleRemoveSpeaker(index)}
                    aria-label="Remove speaker"
                    variant="ghost"
                  />
                </Flex>
              ))}
              <Button
                mt={2}
                size="sm"
                onClick={handleAddSpeaker}
                leftIcon={<AddIcon />}
              >
                Add Speaker
              </Button>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Event Image</FormLabel>
              {formData.img && (
                <Image
                  src={URL.createObjectURL(formData.img)}
                  alt="Event Image"
                  borderRadius="md"
                  mb={2}
                />
              )}
              <Flex>
                <Input
                  type="file"
                  name="img"
                  onChange={handleChange}
                  accept="image/*"
                />
                <IconButton
                  ml={2}
                  size="sm"
                  icon={<AddIcon />}
                  onClick={() =>
                    document.querySelector('input[type="file"]').click()
                  }
                />
              </Flex>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default EventModal;
