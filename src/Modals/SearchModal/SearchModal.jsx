import {
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const SearchModal = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {children && <span onClick={onOpen}>{children}</span>}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
        size="xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Input
              placeholder="Enter your search"
              size="xl"
              variant="filled"
              backgroundColor="transparent"
              boxShadow="lg"
              borderWidth="1px"
              borderColor="subtleBorderColor"
              p={2}
              sx={{
                "&::placeholder": {
                  color: "brand.primary",
                },
              }}
            />
          </ModalHeader>
          <ModalBody>{/* <p>Modal Body</p> */}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
SearchModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchModal;
