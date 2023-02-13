import React from 'react';
import { Heading, VStack, Input, Button, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <Stack p={'17'} w={'33%'} ml={'33%'} h={'90vh'}>
      <form>
        <Heading mt={'20'} ml={'8'}>
          Welcome to Video Hub
        </Heading>
        <VStack
          mt={'8%'}
          spacing={'10'}
          alignItems={'stretch'}
          w={['full', '100']}
          border={'2px solid purple'}
          p={'6'}
          borderRadius={'20'}
        >
          <Text fontWeight={'medium'} style={{ color: 'grey' }}>
            Enter your details below
          </Text>

          <Input
            placeholder="Username"
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Email...."
            type={'email'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          <Input
            placeholder="Confirm Password"
            type={'password'}
            required
            focusBorderColor="purple.500"
          />

          <Button variant={'solid'} colorScheme="purple">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already have an account?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to="/login">Login</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Stack>
  );
};

export default SignUp;
