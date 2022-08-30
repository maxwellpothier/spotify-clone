import GradientLayout from '../components/gradientLayout';
import prisma from '../lib/prisma';
import { Box, Flex, Text } from '@chakra-ui/layout';

const Home = ({artists}) => {
  return (
    <GradientLayout
      roundImage
      color={"blue"}
      title={"Max Pothier"}
      subtitle={"Profile"}
      description={"15 public playlists"}
      image={"/trax-girl.png"}
    >
      <Box color={"white"} paddingX={"40px"}>
        <Box marginBottom={"40px"}>
          <Text fontSize={"2xl"} fontWeight={"bold"}>Top artists this month</Text>
          <Text fontSize={"md"}>Only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX={"20px"}>
              <Box bg={"gray.900"} borderRadius={"4px"} padding={"15px"}>
                <Text>{artist.name}</Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({});

  return {
    props: {artists}
  };
}

export default Home;