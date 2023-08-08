import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Stack,
  VStack,
  Text,
  Link,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';

import { FaGithub, FaLinkedin, FaFileAlt, FaEnvelope } from 'react-icons/fa'; 

const Hero = ({ onOpen }) => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "rgba(226, 232, 240, 0.7)" : "rgba(23, 25, 35, 0.7)";
  const borderColor = useColorModeValue('teal.400', 'teal.600');
  const buttonColor = useColorModeValue('teal.400', 'teal.600');
  return (
    <Flex
      flex="1"
      direction="column"
      align="center"
      justify="center"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
      marginTop={-24}
      marginBottom={4}
      zIndex={2}
    >
    
    <Center
      borderRadius="full"
      boxSize="154px"
      borderWidth="2px"
      borderColor={useColorModeValue('teal.400', 'teal.600')}
      mb="5"
    >
      <Image
        src="/me-portfolio-crop.png"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        objectFit="cover"
      />
    </Center>

      <Box
        p={6}
        maxW="32rem"
        w="full"
        mx="auto"
        rounded="lg"
        boxShadow="xl"
        bg={bg}
        borderWidth={2}
        borderColor={borderColor}
        textAlign="center"
        style={{ backdropFilter: 'blur(10px)' }}
      >
        <Heading size="2xl" fontFamily="helvetica" color={useColorModeValue('gray.800', 'white')}>
          Welcome 👋
        </Heading>
        <Text fontSize={{ base: 'md', lg: 'lg' }} fontFamily="helvetica" color={useColorModeValue('gray.800', 'white')} mt="5">
        Hello, I'm Christopher Ackerman, a Computer Science graduate from Penn State. As I step into the professional realm, 
        I'm keen on leveraging my skills in an entry-level role. Feel free to explore my work or reach out with any questions.
        </Text>
        <Center>
          <Stack direction={'row'} spacing={6} mt={6}>
            <Link href="https://github.com/chriswackerman" isExternal>
              <Button leftIcon={<FaGithub />} rounded="full" bg={buttonColor} color="white" _hover={{bg: 'teal.500'}}>
                GitHub
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/chriswackerman/" isExternal>
              <Button leftIcon={<FaLinkedin />} rounded="full" bg={buttonColor} color="white" _hover={{bg: 'teal.500'}}>
                LinkedIn
              </Button>
            </Link>
            <Link href="https://drive.google.com/file/d/1Po9bPOd9ADLFlntk4EOn4O9BAX5CraRJ/view?usp=sharing" isExternal>
              <Button leftIcon={<FaFileAlt />} rounded="full" bg={buttonColor} color="white" _hover={{bg: 'teal.500'}}>
                Resume
              </Button>
            </Link>
          </Stack>
        </Center>
      </Box>
    </Flex>
  );
};

export default Hero;