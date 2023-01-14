import { AiFillLike } from "react-icons/ai";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { RecommendedAlbums } from "../reusableComponents/albums";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

export const RecommendedAlbumsBody = () => {
  return (
    <>
      <Stack
        pb="10px"
        bgColor="red"
        display="flex"
        alignContent="center"
        justifyContent="space-between"
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        mt={["30px", "30px", "30px", "30px", "30px", "30px"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
      >
        <HStack
          align="center"
          justifyContent="space-between"
          w={["98%", "98%", "98%", "98%", "98%", "98%"]}
          h={["60px", "80px", "80px", "80px", "80px", "80px"]}
        >
          <Stack direction="row" ml="10px">
            <Box mr="10px" pt="3px" pb="3px" color="gray.500">
              <AiFillLike size="25px" />
            </Box>
            <Text
              fontSize={["14px", "14px", "14px", "14px", "14px", "16px"]}
              p="5px"
              fontWeight="bold"
              color="gray.700"
              textAlign="center"
            >
              Recommended Albums
            </Text>
          </Stack>

          <Stack
            direction="row"
            color="gray.500"
            pr="30px"
            gap={["1", "5", "5", "5"]}
          >
            <BsArrowLeftCircle size="35px" />
            <BsArrowRightCircle size="35px" />
          </Stack>
        </HStack>
      </Stack>

      <Stack
        pt="10px"
        display="flex"
        direction="row"
        overflowX="auto"
        gap={["1", "1", "1", "2", "2", "4"]}
        w={["43%", "86%", "83%", "88%", "85%", "85%"]}
        ml={["20px", "40px", "80px", "80px", "80px", "80px"]}
      >
        <RecommendedAlbums
          title={"Good Things"}
          artist={"Dan + Shay"}
          bckImage={["/images/dan+shay-small.jpg"]}
        />
        <RecommendedAlbums
          title={"Respect Original"}
          artist={"Jennifer Hudson"}
          bckImage={["/images/jennifer-hudson.jpeg"]}
        />
        <RecommendedAlbums
          artist={"The Killers"}
          title={"Pressure Machine"}
          bckImage={["/images/the-killers-small.jpeg"]}
        />
        <RecommendedAlbums
          title={"Pyrex Picasso"}
          artist={"Benny the Butcher"}
          bckImage={["/images/pyrex-picasso.jpeg"]}
        />
        <RecommendedAlbums
          title={"Good Things"}
          artist={"Dan + Shay"}
          bckImage={["/images/dan+shay-small.jpg"]}
        />
        <RecommendedAlbums
          title={"Respect Original"}
          artist={"Jennifer Hudson"}
          bckImage={["/images/jennifer-hudson.jpeg"]}
        />
        <RecommendedAlbums
          artist={"The Killers"}
          title={"Pressure Machine"}
          bckImage={["/images/the-killers-small.jpeg"]}
        />
        <RecommendedAlbums
          title={"Pyrex Picasso"}
          artist={"Benny the Butcher"}
          bckImage={["/images/pyrex-picasso.jpeg"]}
        />
      </Stack>
    </>
  );
};
