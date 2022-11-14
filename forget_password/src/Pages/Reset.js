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
    Image, FormHelperText, Stack, InputRightElement
  } from '@chakra-ui/react';
  import {WarningIcon} from '@chakra-ui/icons'
  import {RiLockPasswordLine} from 'react-icons/ri'
  import { useFormik } from "formik";
  import * as Yup from 'yup'
import { BsEye, BsEyeSlash } from 'react-icons/bs';


  const ResetPasswordSchema = Yup.object().shape({
    password : Yup.string()
    .required("Password  & Confirm Password is required")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),

    confirmpassword : Yup.string()
    
    .oneOf([Yup.ref('password'), null], "Password do not match"),
  });


  

  const initialValue ={
    password : "", 
    confirmpassword:""
  }


const Reset =() => {

  const {values, errors, handleBlur, handleChange, handleSubmit} =  
    useFormik({
     initialValues:initialValue,
     validationSchema:ResetPasswordSchema, 
 
     onSubmit :(values, action) => {
         console.log(values);
         action.resetForm();
        
     }

     

    
 });

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
   
  return (
   
    <Container  maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          backgroundImage="background.jpg"
          
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 5 }}>
          <Box p={4}>
            <Wrap spacing={3}>
                <WrapItem>
                    <Box w="15vh">
                        <Image src="logo.png"/>
                    </Box>
            
                </WrapItem>

                <WrapItem>
                    <Stack spacing={1}>
                    <Text color="blue.800" fontWeight="bold">iQuizUAnswer</Text>
                    <Text color="blue.800" fontWeight="semibold" fontSize ="2xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let the job find you</Text>

                    </Stack>
                    
                </WrapItem>
            </Wrap>

            
              
            <WrapItem>
                
                <Box bg="rgb(255,255,255,.5)" borderRadius="lg" mt ="10">
                <form onSubmit={handleSubmit}>
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <Text fontSize="xl" fontWeight="bold" >Reset Password  </Text>
                      <FormControl id="name">
                        <InputGroup borderColor="blue.600">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<RiLockPasswordLine color="gray.800" />}
                          />
                          <Input 
                          type={show ? 'text' : 'password'}
                          name ="password" 
                          placeholder='New Password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password }
                          />
                            <InputRightElement>
                            <Button  variant = "link" onClick={handleClick}>
                                {show ? <BsEyeSlash w={6} h={6} color ="blue.700" /> : <BsEye w={6} h={6} color ="blue.700" />}
                            </Button>
                            </InputRightElement>
                        </InputGroup>
                      </FormControl>

                            {errors.password ? (
                                <HStack>
                                    
                                <WarningIcon w={4} h={4} color="red.500" /> <Text justifyContent="flex-start"  color="red" pl ="1"> {errors.password} </Text>

                                </HStack>) : null 
                            } 


                        <FormControl >
                        <InputGroup borderColor="blue.600">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<RiLockPasswordLine color="gray.800" />}
                          />
                          <Input 
                          type ="password" 
                          name ="confirmpassword" 
                          placeholder='Confirm Password'
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmpassword }
                          />
                        </InputGroup>
                      </FormControl>

                            {errors.confirmpassword ? (
                                <HStack>
                                    
                                <WarningIcon w={4} h={4} color="red.500" /> <Text justifyContent="flex-start"  color="red" pl ="1"> {errors.confirmpassword} </Text>

                                </HStack>) : null 
                            } 

                      
                      
                      <FormControl>
                        <Button
                          type ="submit"
                          variant="solid"
                          bg="blue.600"
                          color="white"
                          _hover={{}}>
                          Reset Password
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                  </form>
                </Box>
            </WrapItem>
                
              
          </Box>
        </Box>
      </Flex>
    </Container>
  )
}

export default Reset