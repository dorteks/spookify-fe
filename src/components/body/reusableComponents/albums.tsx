import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { VStack, Card, Text, Stack } from "@chakra-ui/react";

type Props = {
  title?: any;
  artist?: any;
  bckImage?: any;
  newAlbumTitle?: any;
  newAlbumArtist?: any;
};

export const NewAlbum = ({
  title,
  newAlbumTitle,
  newAlbumArtist,
  bckImage,
}: Props) => {
  return (
    <Card
      bgColor="gray.500"
      backgroundSize={"cover"}
      backgroundImage={bckImage}
      w={["185px", "300px", "400px", "500px", "600px", "670px"]}
      // w={["185px","185px", "300px", "400px", "500px", "600px", "670px"]}
      h={["185px", "280px", "360px", "360px", "360px", "360px"]}
      // h"185px",={["185px", "280px", "360px", "360px", "360px", "360px"]}
    >
      <Text
        color="white"
        pt={["30px", "50px", "60px", "60px", "40px"]}
        // pt={["30px","30px", "50px", "60px", "60px", "40px"]}
        pl={["20px", "30px", "50px", "60px", "80px", "80px"]}
        // pl={["20px","20px", "30px", "50px", "60px", "80px", "80px"]}
        fontSize={["18px", "25px", "35px", "35px", "40px", "45px"]}
        // fontSize={["18px",18px", "25px", "35px", "35px", "40px", "45px"]}
      >
        {title}
      </Text>
      <Text
        color="white"
        pl={["20px", "30px", "50px", "60px", "80px", "80px"]}
        // pl={["20px","20px", "30px", "50px", "60px", "80px", "80px"]}
        pt={["55px", "90px", "130px", "110px", "110px", "110px"]}
        // pt={["55px","55px", "90px", "130px", "110px", "110px", "110px"]}
        fontSize={["13px", "20px", "20px", "25px", "25px", "30px"]}
        // fontSize={["13px","13px", "20px", "20px", "25px", "25px", "30px"]}
      >
        {newAlbumTitle}
      </Text>
      <Text
        color="white"
        pt={["10px", "20px"]}
        // pt={["10px","10px", "20px"]}
        pl={["20px", "30px", "50px", "60px", "80px", "80px"]}
        // pl={["20px","20px", "30px", "50px", "60px", "80px", "80px"]}
        fontSize={["13px", "20px", "20px", "25px", "25px", "30px"]}
        // fontSize={["13px","13px", "20px", "20px", "25px", "25px", "30px"]}
      >
        {newAlbumArtist}
      </Text>
    </Card>
  );
};

export const RecommendedAlbums = ({ title, artist, bckImage }: Props) => {
  return (
    <Stack>
      <VStack>
        <Card
          bgColor="gray.500"
          backgroundSize={"cover"}
          backgroundImage={bckImage}
          w={["200px", "230px", "250px", "250px", "198px", "220px"]}
          // w={["200px","200px", "230px", "250px", "250px", "198px", "220px"]}
          h={["150px", "200px", "200px", "230px", "200px", "200px"]}
          // h={["150px","150px", "200px", "200px", "230px", "200px", "200px"]}
        >
          {}
        </Card>
        <Card
          bgColor="gray.300"
          w={["200px", "230px", "250px", "250px", "198px", "220px"]}
          // w={["200px","200px", "230px", "250px", "250px", "198px", "220px"]}

          h={["100px", "100px", "100px", "100px", "100px", "100px"]}
          // h={["100px","100px", "100px", "100px", "100px", "100px", "100px"]}
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

type TopChartsProps = {
  city?: any;
  bckImage?: any;
};

export const TopCharts = ({ city, bckImage }: TopChartsProps) => {
  return (
    <Stack>
      <VStack>
        <Card
          h="50px"
          bgColor="gray.300"
          w={["250px", "250px", "250px", "250px", "300px", "300px"]}
          // w={["250px","250px", "250px", "250px", "250px", "300px", "300px"]}
        >
          <Stack
            pl="25px"
            mr="25px"
            mt="10px"
            direction="row"
            alignItems="center"
            justify="space-between"
          >
            <Text fontSize="20px">{city}</Text>
            <SlArrowRight size="20px" />
          </Stack>
        </Card>
        <Card
          bgColor="gray.500"
          backgroundSize={"cover"}
          backgroundImage={bckImage}
          w={["250px", "250px", "250px", "250px", "300px", "300px"]}
          // w={["250px","250px", "250px", "250px", "250px", "300px", "300px"]}
          h={["250px", "250px", "250px", "250px", "300px", "300px"]}
          // h={["250px","250px", "250px", "250px", "250px", "300px", "300px"]}
        >
          {}
        </Card>
      </VStack>
    </Stack>
  );
};

type NewAlbumNewProps = {
  title?: any;
  artist?: any;
  bckImage?: any;
};

export const NewAlbumNew = ({ title, artist, bckImage }: NewAlbumNewProps) => {
  return (
    <Stack>
      <VStack>
        <Card
          pl="25px"
          bgColor="gray.500"
          backgroundSize={"cover"}
          backgroundImage={bckImage}
          w={["250px", "250px", "280px", "320px", "300px", "300px"]}
          // w={["250px","250px", "250px", "280px", "320px", "300px", "300px"]}
          h={["250px", "250px", "280px", "320px", "300px", "300px"]}
          // h={["250px","250px", "250px", "280px", "320px", "300px", "300px"]}
        >
          <Text color="white" fontSize={"30px"} fontWeight="bold" pt="40px">
            {title}
          </Text>
          <Text color="white" fontSize="25px" pt="100px">
            {artist}
          </Text>
        </Card>
      </VStack>
    </Stack>
  );
};
