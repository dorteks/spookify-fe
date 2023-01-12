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
    <VStack>
      {/* set horizontal scroll */}
      <Card
        w={["50px", "200px", "200px", "203px", "198px", "220px"]}
        h={["200px", "200px", "200px", "200px", "200px", "200px"]}
        bgColor="gray.500"
      ></Card>
      <Card
        w={["50px", "200px", "200px", "203px", "198px", "220px"]}
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
  );
};
