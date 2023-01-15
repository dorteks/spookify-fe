import { Card, HStack, Img, Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  number: any;
  title: React.ReactNode;
  artist: React.ReactNode;
  time: any;
};

export const TopSinglesCard = ({ number, title, artist, time }: Props) => {
  return (
    <Card
      bgColor="white"
      justify="center"
      h={["80px", "90px", "90px", "80px"]}
      w={["265px", "330px", "620px", "395px", "460px", "555px", "630px"]}
    >
      <HStack>
        <Text
          w="20px"
          mr={["2px", "5px", "20px", "10px", "10px"]}
          ml={["10px", "10px", "30px", "20px", "10px"]}
          pt="3px"
          pb="3px"
          color="gray.500"
          display={["none", "flex", "flex", "flex", "flex", "flex", "flex"]}
          fontSize={["13px", "14px", "16px", "17px", "10px"]}
        >
          {number}
        </Text>
        <Img boxSize={["45px", "45px", "55px", "50px", "55px"]} />
        <Box
          pr={["0", "10px", "10px", "10px", "10px"]}
          pl={["5px", "10px", "30px", "20px", "20px"]}
          color="gray.500"
          w={["200px", "200px", "300px", "200px", "250px", "250px", "380px"]}
        >
          <Text
            fontSize={["12px", "14px", "16px", "16px", "16px"]}
            fontWeight="bold"
          >
            {title}
          </Text>
          <Text fontSize={["10px", "14px", "15px", "15px", "15px"]}>
            {artist}
          </Text>
        </Box>
        <Text
          w={["50px", "50px", "60px", "60px"]}
          pr={["5px", "5px", "5px", "5px"]}
          color="gray.500"
          fontSize={["12px", "14px", "16px", "16px", "16px"]}
        >
          {time}
        </Text>
        <Text textAlign="center" pr="10px" color="gray.500" w="70px">
          ...
        </Text>
      </HStack>
    </Card>
  );
};
