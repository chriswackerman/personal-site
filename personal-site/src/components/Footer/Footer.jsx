import React from "react";
import { 
  Box, 
  Flex, 
  Text,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const Footer = () => {
  const { colorMode } = useColorMode();
  const footerBg = colorMode === "light" ? "rgba(226, 232, 240, 0.7)" : "rgba(23, 25, 35, 0.7)";

  const footerColor = useColorModeValue("black", "white");
  return (
    <Box 
      bg={footerBg} 
      color={footerColor} 
      py={2} 
      position="sticky" 
      bottom={0} 
      zIndex={3}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        margin="0 auto"
        px={4}
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <Text>&copy; 2023 Christopher Ackerman</Text>
      </Flex>
    </Box>
  );
};

export default Footer;