import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Nav from './components/Navbar/Navbar';

const App = () => {
  return (
    <ChakraProvider>
      <Nav />
      {/* Other components go here */}
    </ChakraProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));