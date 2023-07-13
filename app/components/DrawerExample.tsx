'use client'
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
} from '@chakra-ui/react'
import { useSelector } from 'react-redux';

import { useRef } from 'react'
import NovaListaForm from './NovaListaForm'

export function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef(null)
    const data = useSelector((state: any) => state.listas);

    return (
        <>
            <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
                Menu
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>

                    <DrawerBody>
                        <Tabs variant='enclosed'>
                            <TabList>
                                <Tab>Suas listas</Tab>
                                <Tab>Nova lista</Tab>
                                <Tab>Editar lista</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    {data.map((item: any) => <h2 className='text-lg' key={item}>{item}</h2>)}
                                </TabPanel>
                                <TabPanel>
                                    <NovaListaForm />
                                </TabPanel>
                                <TabPanel>
                                    <p>two!</p>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Fechar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}