"use client"
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
import { useRouter } from "next/navigation";
import { updateState } from "../localstorage/localStorage";
import { useDispatch } from "react-redux";
import { attLista } from "../store/reducers";


interface ModalComponentProps {
  item: string;
  setIndex: number;
}

export const ModalComponent: React.FC<ModalComponentProps> = ({setIndex, item}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch()

  const router = useRouter()
  const currentUrl = window.location.href;
  function handdleDeleteLista() {
    dispatch(attLista(setIndex))
    onClose()
    if(currentUrl === 'http://localhost:3000/'){
      router.refresh()
      return
    }
    router.push('/')
  }
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
            <p>Deseja realmente apagar a lista: {item}?</p>
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
              onClick={handdleDeleteLista}
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
