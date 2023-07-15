"use client";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { useRef } from "react";
import NovaListaForm from "./AddNovaListaComponent";
import Link from "next/link";
import { ModalComponent } from "./ModalComponent";

export function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const data = useSelector((state: any) => state.listas);

  return (
    <>
      <Button
        className="bg-white text-azul hover:bg-black hover:text-white"
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      >
        Menu
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Suas listas</Tab>
                <Tab>Nova lista</Tab>
                <Tab>Editar lista</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  {data.map((item: any, index: number) => (
                    <div className="flex" key={index}>
                      <Link
                        href={`/${item}`}
                        className="text-lg"
                        onClick={onClose}
                      >
                        {index} - {item}
                      </Link>
                    </div>
                  ))}
                </TabPanel>
                <TabPanel>
                  <NovaListaForm onCloseDrawer={onClose} />
                </TabPanel>
                <TabPanel>
                  {data.map((item: any, index: number) => (
                    <div className="flex h-full justify-between" key={index}>
                      <div>
                        <Link
                          href={`/${item}`}
                          className="text-lg"
                          onClick={onClose}
                        >
                          {index} - {item}
                        </Link>
                      </div>
                      <div>
                      <ModalComponent setIndex={index} />
                      </div>
                    </div>
                  ))}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
