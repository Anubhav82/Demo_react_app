import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={4}
        left={4}
        colorScheme={'purple'}
        variant={'ghost'}
        w={'20'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement={'left'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>VIDEO HUB</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <HashLink to={'/#home'}>Home</HashLink>
              </Button>

              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <HashLink to={'/#services'}>Services</HashLink>
              </Button>

              <Button variant={'ghost'} colorScheme="purple" onClick={onClose}>
                <Link to={'/videos'}>Free Videos</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={10}
              left={0}
              w={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={'/login'}>LOGIN</Link>
              </Button>

              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/signup'}>SIGN UP</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
