import React, { useState } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

function ContactForm({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const toast = useToast();
  const formBackground = useColorModeValue('gray.200', 'gray.900');
  const borderColor = useColorModeValue('teal.400', 'teal.600');
  const buttonColor = useColorModeValue('teal.400', 'teal.600');
  const inputColor = useColorModeValue('teal.400', 'teal.600');

  const handleSubmit = (event) => {
    event.preventDefault();

    const serviceId = "service_p49ftk9";
    const templateId = "template_8hu7km9";
    const userId = "N1DOazwPHliFbH8hR";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then(() => {
        toast({
          title: "Email sent successfully!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setName("");
        setEmail("");
        setMessage("");
    
        if (onClose) {
          onClose();
        }   
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };

  return (
    <Flex
      direction="column"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box
        as="form"
        onSubmit={handleSubmit}
        w="full"
        maxW="32rem"
        p={8}
        borderWidth={2}
        borderRadius="lg"
        boxShadow="xl"
        borderColor={borderColor}
        bg={formBackground}
        overflow="hidden"
      >
        <Heading size="lg" mb="6" textAlign="center">
          Contact Me
        </Heading>
        <FormControl id="name" mb="4">
          <FormLabel>Your Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            borderColor='gray.400'
            focusBorderColor={inputColor}
          />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Your Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            borderColor='gray.400'
            focusBorderColor={inputColor}
          />
        </FormControl>
        <FormControl id="message" mb="4">
          <FormLabel>Your Message</FormLabel>
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            borderColor='gray.400'
            focusBorderColor={inputColor}
          />
        </FormControl>
        <Box display="flex" justifyContent="center">
          <Button type="submit" rounded="full" bg={buttonColor} color="white" _hover={{bg: 'teal.500'}}>
            Send Message
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default ContactForm;