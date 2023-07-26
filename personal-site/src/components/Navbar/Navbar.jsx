import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Logo from '/mylogo.png';
import LogoDark from '/mylogo-dark.png';
import { FaEnvelope } from 'react-icons/fa'; 

const NavLink = ({ children, href }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={href}>
    {children}
  </Link>
);

export default function Nav({ onOpen }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const logo = colorMode === 'light' ? LogoDark : Logo;
  const navBackground = colorMode === "light" ? "rgba(226, 232, 240, 0.7)" : "rgba(23, 25, 35, 0.7)";
  const buttonColor = useColorModeValue('teal.400', 'teal.600');
  const toggleBgColor = useColorModeValue('purple.600', 'yellow.300');
  const toggleColor = useColorModeValue('white', 'gray.800'); 
  return (
    <Flex 
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg={navBackground}
      color={useColorModeValue('black', 'white')}
      w="100%"
      position="sticky"
      top="0"
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={3}
    >
      <Flex align="center">
        <img src={logo} alt="Logo" width={60} height={60} />
        <Heading ml={2} fontSize="xl" fontWeight="bold" lineHeight="none" fontFamily="'Menlo', monospace">
          Christopher Ackerman
        </Heading>
      </Flex>
      
      <Stack 
        direction={'row'} 
        spacing={6}
        alignItems="center"
      >
        <Button onClick={onOpen} leftIcon={<FaEnvelope />} rounded="full" bg={buttonColor} color="white" _hover={{bg: 'teal.500'}}>
          Contact
        </Button>
        <Button onClick={toggleColorMode} bg={toggleBgColor} color={toggleColor} _hover={{ bg: useColorModeValue('purple.800', 'yellow.500') }}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Stack>
    </Flex>
  );
}