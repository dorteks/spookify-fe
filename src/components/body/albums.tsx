import { VStack, Card, Text, Img, Stack, Box } from "@chakra-ui/react";
import React from "react";

import { SlArrowRight } from "react-icons/sl";

type Props = {
  title?: any;
  artist?: any;
  newAlbumTitle?: any;
  newAlbumArtist?: any;
};

export const NewAlbum = ({ title, newAlbumTitle, newAlbumArtist }: Props) => {
  return (
    <Card
      w={["185px", "300px", "400px", "500px", "600px", "670px"]}
      h={["185px", "280px", "360px", "360px", "360px", "360px"]}
      bgColor="gray.500"
    >
      <Text pt="40px" pl={["20px", "40px", "80px", "80px", "80px", "80px"]}>
        {title}
      </Text>
      <Text
        pt={["5px", "100px", "200px", "200px", "200px", "200px"]}
        pl={["20px", "40px", "80px", "80px", "80px", "80px"]}
      >
        {newAlbumTitle}
      </Text>
      <Text pt="30px" pl={["20px", "40px", "80px", "80px", "80px", "80px"]}>
        {newAlbumArtist}
      </Text>
    </Card>
  );
};

export const RecommendedAlbums = ({ title, artist }: Props) => {
  return (
    <Stack>
      <VStack>
        {/* set horizontal scroll */}
        <Card
          w={["200px", "230px", "250px", "250px", "198px", "220px"]}
          h={["150px", "200px", "200px", "230px", "200px", "200px"]}
          bgColor="gray.500"
        >
          <Img boxSize="50px" />
        </Card>
        <Card
          w={["200px", "230px", "250px", "250px", "198px", "220px"]}
          h={["100px", "100px", "100px", "100px", "100px", "100px"]}
          bgColor="gray.300"
        >
          <Text pl="20px" pt="20px">
            {title}
          </Text>
          <Text pl="20px" pt="5px">
            {artist}
          </Text>
        </Card>
      </VStack>
    </Stack>
  );
};

type AlbumProps = {
  title: any;
  artist: any;
};

export const Albums = ({ title, artist }: AlbumProps) => {
  return (
    <Card
      w={["200px", "600px", "600px", "420px", "350px", "460px"]}
      h={["200px", "250px", "350px", "330px", "340px", "350px"]}
      bgColor="gray.500"
    >
      <Text
        pt={["45px", "45px", "80px", "70px", "70px", "70px"]}
        pl={["20px", "35px", "70px", "60px", "60px", "60px"]}
      >
        {title}
      </Text>
      <Text
        pt={["70px", "100px", "150px", "140px", "140px", "150px"]}
        pl={["20px", "35px", "70px", "60px", "60px", "60px"]}
      >
        {artist}
      </Text>
    </Card>
  );
};

type TopChartsProps = {
  city: any;
};

export const TopCharts = ({ city }: TopChartsProps) => {
  return (
    <Stack>
      <VStack>
        <Card
          w={["200px", "250px", "250px", "250px", "300px", "300px"]}
          h="50px"
          bgColor="gray.300"
        >
          <Stack
            direction="row"
            justify="space-between"
            alignItems="center"
            pl="25px"
            mr="25px"
            mt="15px"
          >
            <Text>{city}</Text>
            <SlArrowRight size="20px" />
            {/* <Img boxSize="30px" /> */}
          </Stack>
        </Card>
        <Card
          w={["200px", "250px", "250px", "250px", "300px", "300px"]}
          h={["200px", "250px", "250px", "250px", "300px", "300px"]}
          bgColor="gray.500"
        >
          <Img boxSize="50px" />
        </Card>
      </VStack>
    </Stack>
  );
};

type NewAlbumNewProps = {
  title: any;
  artist: any;
};

export const NewAlbumNew = ({ title, artist }: NewAlbumNewProps) => {
  return (
    <Stack>
      <VStack>
        <Card
          w={["250px", "250px", "280px", "320px", "300px", "300px"]}
          h={["250px", "250px", "280px", "320px", "300px", "300px"]}
          bgColor="gray.500"
          pl="25px"
        >
          <Text fontSize={"25px"} pt="40px">
            {title}
          </Text>
          <Text fontSize="20px" pt="100px">
            {artist}
          </Text>
        </Card>
      </VStack>
    </Stack>
  );
};
