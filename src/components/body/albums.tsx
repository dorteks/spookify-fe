import { VStack, Card, Text } from "@chakra-ui/react";
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
      w={["0px", "0px", "0px", "420px", "510px", "700px"]}
      h="360px"
      bgColor="gray.500"
    >
      <Text pt="40px" pl="80px">
        {title}
      </Text>
      <Text pt="200px" pl="80px">
        {newAlbumTitle}
      </Text>
      <Text pt="30px" pl="80px">
        {newAlbumArtist}
      </Text>
    </Card>
  );
};

export const RecommendedAlbums = ({ title, artist }: Props) => {
  return (
    <VStack>
      <Card
        w={["50px", "50px", "50px", "203px", "198px", "220px"]}
        h="200px"
        bgColor="gray.500"
      ></Card>
      <Card
        w={["50px", "50px", "50px", "203px", "198px", "220px"]}
        h="100px"
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
  );
};
