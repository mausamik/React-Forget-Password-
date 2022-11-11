// import { Stack, Heading, Input, CheckBox, Link, Button , Box, Flex, Container, Text, VStack , Image, HStack, FormControl, FormLabel } from '@chakra-ui/react'
import React, {useState} from 'react'
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
    Image, FormHelperText
  } from '@chakra-ui/react';
  import {WarningIcon} from '@chakra-ui/icons'
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  import { useFormik } from "formik";
  import * as Yup from 'yup'


  const EmailSchema = Yup.object().shape({
    email:Yup.string()
    .email("Invalid email format")
    .required("Please enter your email")
  });

  const initialValue ={
    email : ""
  }
const Forget =() => {

  const {values, errors, handleBlur, handleChange, handleSubmit} =  
    useFormik({
     initialValues:initialValue,
     validationSchema:EmailSchema, 
 
     onSubmit :(values, action) => {
         console.log(values);
         action.resetForm();
        
     }

    
 });
  
   
  return (
   
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
                
                <Box bg="rgb(255,255,255,.5)" borderRadius="lg" mt ="10">
                <form onSubmit={handleSubmit}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <Text fontSize="xl" fontWeight="bold" >Forgot Password ? </Text>
                      <FormControl id="name">
                        <InputGroup borderColor="blue.600">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input 
                          type ="email" 
                          name ="email" 
                          placeholder='Enter your Email Id'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          />
                        </InputGroup>
                      </FormControl>

                            {errors.email ? (
                                <HStack>
                                    
                                <WarningIcon w={4} h={4} color="red.500" /> <Text justifyContent="flex-start"  color="red" pl ="1"> {errors.email} </Text>

                                </HStack>) : null 
                            } 
                      
                      
                      <FormControl>
                        <Button
                          type ="submit"
                          variant="solid"
                          bg="blue.600"
                          color="white"
                          _hover={{}}>
                          Send Email
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                  </form>
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