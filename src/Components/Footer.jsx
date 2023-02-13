import { Box, Heading, VStack, Stack, Text, HStack } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
  return (
    <Box minH={'40'} bgColor="black" color={'white'} position={'sticky'}>
      <Stack p={'6'} direction={['column', 'row']}>
        <VStack w={'full'}>
          <Heading color="white">Video Hub</Heading>
          <Text>Follow for more vedios</Text>
        </VStack>
        <HStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          alignItems={'center'}
        >
          <Heading w={'full'} pl="10">
            Social Media
          </Heading>

          <VStack w={'full'} alignItems="flex-start">
            <a href="https://www.whatsapp.com/">Whatsapp</a>
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://login.yahoo.com/?.src=ym&lang=en-US&done=https%3A%2F%2Fin.mail.yahoo.com%2F%3Fguce_referrer%3DaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%26guce_referrer_sig%3DAQAAAG1r0y3K8TBlrCxYWIXdyHnU4xW_p0fwgvH74zSuECp4JfettBLsGgau_Xxb3w5K35eKmg9hpHDXwFkZgqKRaved8KIiWdb9f1jPD4QKiw-avHQv0rcbWPevGUvZ7wUSfSXM4waXcwDNUz-xzxS8qOo8RmSBFrKvOfjBsb4Z22Qf">
              Yahoo!
            </a>
          </VStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
