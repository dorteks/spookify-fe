import {
  BsFillBookmarkFill,
  BsSuitHeartFill,
  BsCalendarEvent,
} from "react-icons/bs";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { GrHistory } from "react-icons/gr";
import { FaCompass } from "react-icons/fa";
import { RiPlayListAddLine, RiPlayListFill } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { CgEditBlackPoint } from "react-icons/cg";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Img,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Artists, Main, Music, Playlists } from "./sidebar/reusables";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";

const Sidebar = () => {
  return (
    <Box
      height="auto"
      bgColor={["purple", "blue", "yellow", "brown", "green", "orange"]}
      // bgColor="#f1faee"
    >
      <Stack
        flexDirection={["row", "row", "row", "column", "column", "column"]}
        pl={["10px", "20px", "20px", "20px", "20px", "20px"]}
        pr="10px"
        pt="25px"
      >
        <Stack
          display="flex"
          direction="row"
          alignContent="center"
          alignItems={"center"}
          justifyContent={[
            "space-between",
            "space-between",
            "space-between",
            "start",
            "start",
            "start",
          ]}
        >
          {/* open Hamburger menu */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<GiHamburgerMenu />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>

          {/* Constructor icon */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<GiHamburgerMenu />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>

          {/* personal release icon */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<BsFillBookmarkFill size="20px" />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>

          {/* create playlist icon */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<RiPlayListAddLine size="20px" />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>

          {/* setting icon */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<AiTwotoneSetting size="20px" />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>
          {/* ends here */}

          {/* avatar - profile icon */}
          <Box>
            <IconButton
              aria-label="Open Menu"
              mr={["1", "9", "20", "0", "0", "0"]}
              icon={<AiTwotoneSetting size="20px" />}
              display={["flex", "flex", "flex", "none", "none", "none"]}
              // onClick={() => changeDisplay("flex")}
            />
          </Box>
        </Stack>

        <HStack>
          <Img
            display={["flex", "flex", "flex", "flex", "flex", "flex"]}
            boxSize="30px"
            borderRadius="full"
            bgColor="purple.600"
            mr="10px"
          />
          <Text
            fontSize={["10px", "10px", "10px", "14px", "14px", "16px"]}
            display={["none", "none", "none", "flex", "flex", "flex"]}
          >
            Constructor UI Kit
          </Text>
        </HStack>
      </Stack>

      <Box display={["none", "none", "none", "flex", "flex", "flex"]}>
        <Box pl="5px" pr="10px" pt="40px">
          <VStack align="left">
            <Text
              fontSize={["0", "0", "0", "10px", "12px", "14px"]}
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
              fontSize={["0px", "0px", "10px", "12px", "14px"]}
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
              fontSize={["0px", "0px", "10px", "12px", "14px"]}
              fontWeight="bold"
              color="gray.700"
              ml="20px"
              mt="10px"
              mb="20px"
            >
              YOUR PLAYLISTS
            </Text>
            <Playlists
              title={"My Rock Collect"}
              leftIcon={<RiPlayListFill />}
            />
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
            width={["0px", "0px", "0px", "120px", "150px"]}
            bgColor="white"
            borderRadius="25px"
            fontSize={["0px", "0px", "0px", "13px", "15px"]}
          >
            New Playlist
          </Button>
        </Box>
        <Box pl="5px" pr="10px" pt="45px">
          <VStack align="left">
            <Text
              fontSize={["0px", "0px", "10px", "12px", "14px"]}
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
    </Box>
  );
};

export default Sidebar;
