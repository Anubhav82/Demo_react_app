import { Box, Image, Heading, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box id="home">
      <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        <Box w="full" h={'100vh'}>
          <Image src={img1} h="full" w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src={img2} h="full" w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>

        <Box w="full" h={'100vh'}>
          <Image src={img3} h="full" w={'full'} objectFit={'cover'} />
          <Heading
            bgColor={'blackAlpha.600'}
            color={'white'}
            {...headingOptions}
          >
            Watch The Future
          </Heading>
        </Box>
      </Carousel>

      <About />
    </Box>
  );
};

const About = () => {
  return (
    <Container maxW={'container.xl'} p="14" h={'100vh'} id="services">
      <Heading
        textTransform={'uppercase'}
        w={'fit-content'}
        py={'1'}
        borderBottom={'2px solid'}
        m={'auto'}
      >
        Services
      </Heading>

      <Stack
        h={'full'}
        p={'1'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Image src={img5} h={['40', '400']} />

        <Text textAlign={'center'} fontFamily={'cursive'} p={('4', '16')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          impedit et magnam blanditiis repudiandae sapiente, amet, sed
          distinctio ipsa aliquam quidem incidunt sint ipsum voluptate? Quos
          maiores est pariatur maxime. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aliquam praesentium reprehenderit vero nihil
          pariatur, laboriosam expedita, doloribus dignissimos ipsa porro
          cupiditate quae reiciendis minus quo maiores. Sequi debitis laudantium
          vel. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          neque voluptates odio. Asperiores, iste iusto? Nesciunt velit
          officiis, doloribus aperiam nam vero totam ratione voluptate culpa
          magnam in, sit ab. Lorem ipsum dolor sit amet consectetur adipisicing
        </Text>
      </Stack>
    </Container>
  );
};

export default Home;
