import React, { useState } from 'react';
import { Box, Modal, ModalOverlay, ModalContent, ModalCloseButton, useColorModeValue, Flex } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import Model from './components/Model/Model';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ContactForm from './components/Contact Form/ContactForm';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const formBackground = useColorModeValue('whiteAlpha.900', 'gray.800');

  return (
    <Box 
      w="100%" 
      minH="100vh" 
      display="flex" 
      flexDirection="column" 
      overflow="hidden"
    >
      <Navbar onOpen={onOpen} />
      <Flex 
        flex="1" 
        flexDirection="column" 
        pl={{ base: 2, md: 4 }} 
        pr={{ base: 2, md: 4 }}
      >
        <Model flex="3" />
        <Hero flex="2" />
      </Flex>
      <Footer />
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={formBackground}>
          <ModalCloseButton />
          <ContactForm onClose={onClose} />
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default App;