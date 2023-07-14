import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { updateState } from "../localstorage/localStorage";

export function ModalComponent(setIndex: number) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button
        onClick={onOpen}
        className="bg-red-600 ml-1 w-6 h-6 rounded-md text-white font-medium"
      >
        X
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Você está prestes a deletar essa lista</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>Deseja realmente apagar a lista de cards?</p>
          </ModalBody>

          <ModalFooter>
            <Button
              className="bg-laranja text-white hover:bg-red-600"
              mr={3}
              onClick={onClose}
            >
              Não
            </Button>
            <Button
              variant="ghost"
              onClick={updateState(setIndex)}
              className="bg-azul text-white hover:bg-verde hover:text-black"
            >
              Sim
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
