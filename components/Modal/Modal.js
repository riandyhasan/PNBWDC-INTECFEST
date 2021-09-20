import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

export default function ModalCustom({ width, title, content, isOpen, onClose, ...props }) {
  return (
    <Modal size={width} motionPreset="slideInRight" w={width} isOpen={isOpen} onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="brand.primary" textAlign="center" fontSize="4xl">
          {title}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody mb="0.75rem">{content}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
