import React, { useState } from 'react';
import { Box, Button, Stack, VStack, Heading, Text } from '@chakra-ui/react';

const Videos = () => {
  const videos = [
    'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    'https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78',
    'https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281',
    'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    'https://player.vimeo.com/progressive_redirect/playback/586228759/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=ecb672512efcbb957fbc503b2e364ba203abca3967bde4416f87e19a692936be',
    'https://player.vimeo.com/progressive_redirect/playback/581386222/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=12dd8689959260d70fd78c615a2976f503e4e459450c80db2b0565f6b2cd06ac',
  ];

  const [videoSrc, setVideoSrc] = useState(videos[0]);

  return (
    <Box>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'} p={'16'}>
          <video controls src={videoSrc}></video>
          <VStack alignItems={'flex-start'} w="full" p={'16'} overflow={'auto'}>
            <Heading borderBottom={'solid 2px'} color="purple">
              Vedio Title
            </Heading>
            <Text overflow={'auto'}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              odio corporis quidem necessitatibus facere voluptatem, rem
              exercitationem fugit. Provident omnis sit veniam voluptatibus
              necessitatibus esse distinctio doloribus maiores asperiores
              accusamus? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Animi veniam rerum obcaecati quod pariatur vitae. Culpa
              eveniet necessitatibus sunt aspernatur dolore omnis sapiente
              recusandae numquam, ea tempore veritatis animi aliquid. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Quidem labore
              sunt dignissimos veniam. Quisquam ex eaque, quaerat cupiditate
              maiores nihil natus, harum beatae ipsam itaque expedita, officia
              provident accusantium quas? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Doloremque blanditiis eaque enim
              pariatur saepe debitis consequuntur incidunt ipsum, impedit
              reprehenderit odit dignissimos repellat ducimus doloribus!
              Voluptatem sint repudiandae dolores nisi. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Numquam rem eum sint vitae non
              cumque nostrum, deserunt, hic blanditiis sapiente necessitatibus
              illo voluptatum, at eos quisquam dicta ipsam impedit id.
            </Text>
          </VStack>
        </VStack>

        <VStack
          w={'full'}
          p={'16'}
          spacing="8"
          alignItems={'stretch'}
          direction={['column', 'row']}
        >
          {videos.map((item, index) => {
            return (
              <Button
                colorScheme={'purple'}
                variant="ghost"
                onClick={() => setVideoSrc(item)}
                border={'solid 1px'}
                borderRadius="20px"
              >
                Vedio {index + 1}
              </Button>
            );
          })}
        </VStack>
      </Stack>
    </Box>
  );
};

export default Videos;
