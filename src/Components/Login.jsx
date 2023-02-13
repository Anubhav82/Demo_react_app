import { Heading, VStack, Input, Button, Text, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Stack p={'17'} w={'33%'} ml={'33%'} h={'90vh'}>
      <form action="">
        <VStack
          mt={'15%'}
          spacing={'10'}
          alignItems={'stretch'}
          w={['full', '100']}
          border={'2px solid purple'}
          p={'6'}
          borderRadius={'20'}
        >
          <Heading>Welcome to Video Hub</Heading>

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
          <Button alignSelf={'flex-end'} variant={'link'}>
            <Link to="/forgetpassword">Forget Password</Link>
          </Button>
          <Button variant={'solid'} colorScheme="purple">
            Login
          </Button>

          <Text textAlign={'right'}>
            New User?{' '}
            <Button variant={'link'} colorScheme={'purple'}>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Stack>
  );
};

export default Login;
