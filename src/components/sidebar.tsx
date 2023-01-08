import {
  BsFillBookmarkFill,
  BsSuitHeartFill,
  BsCalendarEvent,
} from "react-icons/bs";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { GrHistory } from "react-icons/gr";
import { FaCompass } from "react-icons/fa";
import { RiPlayListFill } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import { Main, Music, Playlists, Artists } from "./reusables";
import { Box, Button, HStack, Img, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box width="306px" height="auto" bgColor="#f1faee">
      <Box pl="20px" pr="10px" pt="25px">
        <HStack>
          <Img
            boxSize="30px"
            borderRadius="full"
            bgColor="purple.600"
            mr="10px"
          />
          <Text fontSize="18px">Constructor UI Kit</Text>
        </HStack>
      </Box>
      <Box pl="5px" pr="10px" pt="45px">
        <VStack align="left">
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
            ml="20px"
            mt="10px"
            mb="20px"
          >
            MAIN CATEGORIES
          </Text>
          <Main title={"Home"} leftIcon={<IoMdHome />} />
          <Main title={"Explore"} leftIcon={<FaCompass />} />
          <Main title={"New Releases"} leftIcon={<BsCalendarEvent />} />
          <Main title={"Top Charts"} leftIcon={<BiNetworkChart />} />
          <Main title={"Radio"} leftIcon={<CgEditBlackPoint />} />
          <Main title={"News Music"} leftIcon={<BsFillBookmarkFill />} />
        </VStack>
      </Box>
      <Box pl="5px" pr="10px" pt="45px">
        <VStack align="left">
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
            ml="20px"
            mt="10px"
            mb="20px"
          >
            YOUR MUSIC
          </Text>
          <Music title={"Favourites"} leftIcon={<BsSuitHeartFill />} />
          <Main title={"History"} leftIcon={<GrHistory />} />
        </VStack>
      </Box>
      <Box pl="5px" pr="10px" pt="45px">
        <VStack align="left">
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
            ml="20px"
            mt="10px"
            mb="20px"
          >
            YOUR PLAYLISTS
          </Text>
          <Playlists title={"My Rock Collect"} leftIcon={<RiPlayListFill />} />
          <Playlists title={"Best Music"} leftIcon={<RiPlayListFill />} />
          <Playlists title={"Hits of 90s"} leftIcon={<RiPlayListFill />} />
          <Playlists title={"Classic Music"} leftIcon={<RiPlayListFill />} />
          <Playlists title={"New Pop Music"} leftIcon={<RiPlayListFill />} />
          <Playlists title={"Slipknot"} leftIcon={<RiPlayListFill />} />
        </VStack>
      </Box>
      <Box pl="5px" pr="10px" pt="45px">
        <Button
          ml="20px"
          mt="10px"
          mb="20px"
          width="150px"
          bgColor="white"
          borderRadius="25px"
        >
          New Playlist
        </Button>
      </Box>
      <Box pl="5px" pr="10px" pt="45px">
        <VStack align="left">
          <Text
            fontSize="14px"
            fontWeight="bold"
            color="gray.700"
            ml="20px"
            mt="10px"
            mb="20px"
          >
            YOUR FAVOURITE ARTISTS
          </Text>
          <Artists title={"Billie Eilish"} leftIcon={""} />
          <Artists title={"BTS"} leftIcon={""} />
          <Artists title={"Olivia Rodrigo"} leftIcon={""} />
          <Artists title={"The Weekemd"} leftIcon={""} />
          <Artists title={"Doja Cat "} leftIcon={""} />
          <Artists title={"Nas "} leftIcon={""} />
          <Artists title={"Dua Lipa "} leftIcon={""} />
          <Artists title={"Ed Sheeran "} leftIcon={""} />
          <Artists title={"Luke Combs "} leftIcon={""} />
          <Artists title={"Billie "} leftIcon={""} />
        </VStack>
      </Box>
    </Box>
  );
};

export default Sidebar;
