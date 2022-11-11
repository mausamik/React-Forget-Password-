// import { Stack, Heading, Input, CheckBox, Link, Button , Box, Flex, Container, Text, VStack , Image, HStack, FormControl, FormLabel } from '@chakra-ui/react'
import React from 'react'
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Image
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

  

function Forget() {
  return (
    // <Flex
    // flexDirection="column"
    // width="full"
    // height="150vh"
    // bg ="white"
    // justifyContent="flex-top"
    // >
      
    //     <Flex h ={{base:"auto" , lg: "100vh"}}
    //      py={[0,10,20]}
    //      direction={{
    //       base: 'column-reverse',
    //       lg: "row", 
    //      }}

    //      >
    //         <Container maxW="container.xl" bg="blue.100">
    //             <Box w="auto" h="auto" bg ="blue.100" pl="10vh">
                    
    //                 <HStack w ="60vh" pt="10vh" bg="purple.100">
    //                     <Image src="img.png"/>
                        
                        
                        
                        
    //                 </HStack>
                   

                    
                   
    //             </Box>

    //         </Container>


        
            
        
    //     </Flex>
    // </Flex>
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          backgroundImage="background.jpg"
          
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box w="60vh">
                  <Image src="img.png"/>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="#f2f2f2" borderRadius="lg" mt ="10">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <Text fontSize="xl" fontWeight="bold" >Forgot Password ? </Text>
                      <FormControl id="name">
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type ="email" placeholder='Enter your Email Id'/>
                        </InputGroup>
                      </FormControl>
                      
                      <FormControl>
                        <Button
                          variant="solid"
                          bg="blue.600"
                          color="white"
                          _hover={{}}>
                          Send Email
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Forget