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
import { Artists, Main, Music, Playlists } from "./sidebar/reusables";
import { Box, Button, HStack, Img, Text, VStack } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box height="auto" bgColor="#f1faee">
      <Box
        pr="10px"
        pt="25px"
        pl={["20px"]}
        display={["none", "none", "none", "none", "flex", "flex", "flex"]}
      >
        <HStack>
          <Img
            mr="5px"
            boxSize={["35px", "35px", "40px", "40px"]}
            borderRadius="full"
            bgColor="purple.600"
          />
          <Text
            fontWeight="bold"
            fontSize={["0px", "16px", "16px", "20px", "20px", "23px"]}
            // fontSize={["0px","0px", "16px", "16px", "16px", "16px", "16px"]}
          >
            Constructor UI Kit
          </Text>
        </HStack>
      </Box>
      <Box
        pl="5px"
        pr="10px"
        pt="40px"
        display={["none", "none", "none", "none", "flex", "flex", "flex"]}
      >
        <VStack align="left">
          <Text
            ml="20px"
            mt="10px"
            mb="20px"
            color="gray.700"
            fontWeight="bold"
            fontSize={["0px", "0px", "14px", "14px", "14px", "14px"]}
            // fontSize={["0px","0px", "0px", "14px", "14px", "14px", "14px"]}
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
      <Box
        pl="5px"
        pr="10px"
        pt="45px"
        display={["none", "none", "none", "none", "flex", "flex", "flex"]}
      >
        <VStack align="left">
          <Text
            ml="20px"
            mt="10px"
            mb="20px"
            color="gray.700"
            fontWeight="bold"
            fontSize={["14px", "14px", "14px", "14px", "14px", "14px"]}
            // fontSize={["14px", "14px", "14px", "14px", "14px", "14px", "14px"]}
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
            ml="20px"
            mt="10px"
            mb="20px"
            color="gray.700"
            fontWeight="bold"
            fontSize={["14px"]}
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
      <Box
        pl="5px"
        pr="10px"
        pt="45px"
        display={["none", "none", "none", "none", "flex", "flex", "flex"]}
      >
        <Button
          ml="20px"
          mt="10px"
          mb="20px"
          bgColor="white"
          borderRadius="25px"
          fontSize={["15px"]}
          width={["0px", "0px", "0px", "120px", "150px"]}
          // width={["0px","0px", "0px", "0px", "120px", "150px"]}
        >
          New Playlist
        </Button>
      </Box>
      <Box
        pl="5px"
        pr="10px"
        pt="45px"
        display={["none", "none", "none", "none", "flex", "flex", "flex"]}
      >
        <VStack align="left">
          <Text
            ml="20px"
            mt="10px"
            mb="20px"
            color="gray.700"
            fontWeight="bold"
            fontSize={["14px"]}
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
