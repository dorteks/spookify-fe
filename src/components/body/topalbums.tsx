import { Card, HStack, Img, Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  number: any;
  title: React.ReactNode;
  artist: React.ReactNode;
  time: any;
};

export const TopAlbumsCard = ({ number, title, artist, time }: Props) => {
  return (
    <Card w="520px" h="80px" justify="center">
      <HStack>
        <Text w="25px" mr="10px" ml="10px" pt="3px" pb="3px" color="gray.500">
          {number}
        </Text>
        <Img boxSize="45px" />
        <Box w="300px" pr="10px" pl="20px" color="gray.500">
          <Text fontSize="14px" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="14px">{artist}</Text>
        </Box>
        <Text w="60px" pr="10px" color="gray.500">
          {time}
        </Text>
        <Text textAlign="center" pr="10px" color="gray.500" w="70px">
          ...
        </Text>
      </HStack>
    </Card>
  );
};
