import { VStack, Card, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title: any;
  artist: any;
};

export const RecommendedAlbums = ({ title, artist }: Props) => {
  return (
    <VStack>
      <Card w="220px" h="200px" bgColor="gray.500"></Card>
      <Card w="220px" h="100px" bgColor="gray.300">
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
