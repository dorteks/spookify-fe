import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { SlArrowRight } from "react-icons/sl";
import { BiNetworkChart } from "react-icons/bi";
import { FaCompass } from "react-icons/fa";
import { CgEditBlackPoint } from "react-icons/cg";
import {
  BsFillBookmarkFill,
  BsSuitHeartFill,
  BsCalendarEvent,
} from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { RiPlayListFill } from "react-icons/ri";
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { BsFillBookmarkFill } from "react-icons/bs";
// import { BsFillBookmarkFill } from "react-icons/bs";

type Props = {
  title: React.ReactNode;
  leftIcon: any;
};

const Sidebar = () => {
  const Main = ({ title, leftIcon }: Props) => {
    return (
      <Stack
        direction="row"
        pb="15px"
        pl="20px"
        p="13px"
        _hover={{
          backgroundColor: "white",
          p: "13px",
          borderRadius: "25px",
          color: "purple.600",
          fontWeight: "bold",
        }}
      >
        <Stack direction="row" ml="15px">
          <Box mr="10px" pt="3px" pb="3px" color="gray.500">
            {leftIcon}
          </Box>
          <Text width="130px" fontWeight="bold">
            {title}
          </Text>
        </Stack>
        <Stack pl="40px">
          <Box p="5px">
            <SlArrowRight size="10px" />
          </Box>
        </Stack>
      </Stack>
    );
  };

  const Music = ({ title, leftIcon }: Props) => {
    return (
      <Stack
        direction="row"
        pb="15px"
        pl="20px"
        p="13px"
        _hover={{
          backgroundColor: "white",
          p: "13px",
          borderRadius: "25px",
          color: "red.600",
          fontWeight: "bold",
        }}
      >
        <Stack direction="row" ml="15px">
          <Box mr="10px" pt="3px" pb="3px" color="red.500">
            {leftIcon}
          </Box>
          <Text width="110px" fontWeight="bold">
            {title}
          </Text>
        </Stack>
        <Stack pl="60px">
          <Box p="5px">
            <SlArrowRight size="10px" />
          </Box>
        </Stack>
      </Stack>
    );
  };

  const Playlists = ({ title, leftIcon }: Props) => {
    return (
      <Stack
        direction="row"
        pb="15px"
        pl="20px"
        p="13px"
        _hover={{
          backgroundColor: "white",
          p: "13px",
          borderRadius: "25px",
          color: "purple.600",
          fontWeight: "bold",
        }}
      >
        <Stack direction="row" ml="15px">
          <Box mr="10px" pt="3px" pb="3px" color="gray.500">
            {leftIcon}
          </Box>
          <Text width="130px" fontSize="15px" fontWeight="bold">
            {title}
          </Text>
        </Stack>
        <Stack pl="40px">
          <Box p="5px">
            <SlArrowRight size="10px" />
          </Box>
        </Stack>
      </Stack>
    );
  };

  const Artists = ({ title, leftIcon }: Props) => {
    return (
      <Stack
        direction="row"
        pb="15px"
        pl="20px"
        p="13px"
        _hover={{
          backgroundColor: "white",
          p: "13px",
          borderRadius: "25px",
          color: "red.600",
          fontWeight: "bold",
        }}
      >
        <Stack direction="row" ml="15px">
          {/* <Box mr="10px" pt="3px" pb="3px">
            {leftIcon}
          </Box> */}
          <Avatar
            size="sm"
            mr="10px"
            pt="3px"
            pb="3px"
            borderRadius="25px"
            src={leftIcon}
          />
          <Text width="110px" fontSize="14px" fontWeight="bold" p="3px">
            {title}
          </Text>
        </Stack>
        <Stack pl="60px">
          <Box p="5px">
            <SlArrowRight size="10px" />
          </Box>
        </Stack>
      </Stack>
    );
  };

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
