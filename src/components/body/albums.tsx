import { VStack, Card, Text, Img, Stack } from "@chakra-ui/react";
import React from "react";

type Props = {
  title?: any;
  artist?: any;
  newAlbumTitle?: any;
  newAlbumArtist?: any;
};

export const NewAlbum = ({ title, newAlbumTitle, newAlbumArtist }: Props) => {
  return (
    <Card
      w={["0px", "300px", "400px", "500px", "600px", "670px"]}
      h={["0px", "280px", "360px", "360px", "360px", "360px"]}
      bgColor="gray.500"
    >
      <Text pt="40px" pl={["0px", "40px", "80px", "80px", "80px", "80px"]}>
        {title}
      </Text>
      <Text
        pt={["0px", "100px", "200px", "200px", "200px", "200px"]}
        pl={["0px", "40px", "80px", "80px", "80px", "80px"]}
      >
        {newAlbumTitle}
      </Text>
      <Text pt="30px" pl={["0px", "40px", "80px", "80px", "80px", "80px"]}>
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
          w={["150px", "200px", "200px", "203px", "198px", "220px"]}
          h={["150px", "200px", "200px", "200px", "200px", "200px"]}
          bgColor="gray.500"
        >
          <Img boxSize="50px" />
        </Card>
        <Card
          w={["150px", "200px", "200px", "203px", "198px", "220px"]}
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
      w={["500px", "600px", "600px", "420px", "350px", "460px"]}
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
